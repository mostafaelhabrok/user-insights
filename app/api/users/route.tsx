import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import ParamsError from '@/app/users/UsersError';

interface User {
    id: number,
    name: string,
    age: number,
    active: boolean,
    last_login: string
  }

export async function GET(request: NextRequest) {
    try {
        const data = await fs.promises.readFile('users.json', 'utf8');
        const users: User[] = JSON.parse(data);

        const params = request.nextUrl.searchParams;
        const name = params.get('name') ;
        const age = params.get('age') ;
        const activeStatus = params.get('activeStatus') ;

        const filteredUsers = users.filter(user => 
            (name && name != 'undefined' ? user.name.toLowerCase().includes(name!.toLowerCase()) : true) &&
            (age && age != 'undefined' ? user.age == parseInt(age) : true)  &&
            (activeStatus == '1' ? user.active == true : true) &&
            (activeStatus == '2' ? user.active == false : true)
        );

        let active_count = 0 , inactive_count = 0 , avg_age = 0 , sum_age = 0;
        for (let i = 0; i < filteredUsers.length; i++) {
            if(filteredUsers[i].active) active_count++;
            else inactive_count++;
            sum_age += filteredUsers[i].age;
        }
        avg_age = sum_age / filteredUsers.length;
        const agg = {avg_age,active_count,inactive_count};

        return NextResponse.json({agg,users:filteredUsers});
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ error: error }, { status: 400 });
        // return NextResponse.error();

        
    }
}