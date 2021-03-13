import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'recipes-edit',
    templateUrl: './recipes-edit.component.html',
    styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

    id: number;
    editMode = false;

    constructor(private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.router.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
            }
        );
    }
}