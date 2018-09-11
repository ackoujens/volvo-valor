import ToDo from '../models/todo.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
    api_url = 'http://localhost:3000';
    todoUrl = `${this.api_url}/api/todos`;

    constructor( private http: HttpClient ) {}

    // Create todo, takes ToDo object
    createTodo(todo: ToDo): Observable<any> {
        // returns observable of http post request
        return this.http.post(`${this.todoUrl}`, todo);
    }

    // Read todo, takes no arguments
    getToDos(): Observable<ToDo[]> {
        return this.http.get(this.todoUrl)
        .pipe(map(res => {
            // Maps the response object sent from the server
            return res['data'].docs as ToDo[];
        }));
    }
    // Update todo, takes a ToDo Object as parameter
    editTodo(todo: ToDo) {
        const editUrl = `${this.todoUrl}`;
        // returns the observable of http put request
        return this.http.put(editUrl, todo);
    }

    deleteTodo(id: string): any {
        // Delete the object by the id
        const deleteUrl = `${this.todoUrl}/${id}`;
        return this.http.delete(deleteUrl)
        .pipe(map(res  => {
        return res;
        }));
    }

    // Default Error handling method.
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}


