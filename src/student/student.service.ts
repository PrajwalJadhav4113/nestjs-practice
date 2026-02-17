import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students =[
        {id:1,name:"Prajwal",age:22},
        {id:2,name:"Soham",age:22},
        {id:3,name:"Sahil",age:22}
    ];

    //Get

    getAllStudents(){
        return this.students;
    }

    getStudentById(id:number){
        const student = this.students.find((s)=>s.id=== id);
        if(!student) throw new NotFoundException("Student Not found !")
            return student;
    }

    //Post 
    createStudent(data:{name:string,age:number}){
        const newStudent ={
            id:Date.now(),
            ...data,
        };
        this.students.push(newStudent)
        return newStudent
    }

    //Put
    updateStudent(id:number,data:{name:string; age:number}){
        const index = this.students.findIndex((s)=>s.id===id);
        if(index === -1) throw new NotFoundException('Student not found')
            this.students[index]={id,...data}
        return this.students[index];
    }

    //Patch
    patchStudent(id:number , data:Partial<{name:string,age:number}>){
        const student = this.getStudentById(id);
        Object.assign(student,data);
        return student;
    }
// Delete 
    deleteStudent(id:number){
        const index = this.students.findIndex((s)=>s.id ===id);
        if(index === -1) throw new NotFoundException('Student not found');
        const deleted =this.students.splice(index,1)  //1,1
        return {message : 'Student Deleted', student:deleted[0]}
    }



}
