import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResult } from '../../Models/Category';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  categoriesIndex = environment.categoriesIndex
  constructor(
    private readonly http: HttpClient
  ) { }

  getCategories():Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.categoriesIndex)
  }
}
