import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResult } from '../../Models/Category';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  constructor(
    private readonly http: HttpClient
  ) { }

  getCategories():Observable<CategoryResult>{
    return this.http.get<CategoryResult>(environment.categoriesIndex)
  }

  destroyCategory(id: number): Observable<CategoryResult>{
    return this.http.delete<CategoryResult>(environment.categoriesDestroy + id)
  }

  getCategoriesDisabled():Observable<CategoryResult>{
    return this.http.get<CategoryResult>(environment.categoriesDisabled)
  }

  activateCategory(id: number): Observable<CategoryResult>{
    return this.http.post<CategoryResult>(environment.categoryActivate + id, {})
  }


  getCategoryId(id: number): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(environment.getCategoryId + id)
  }

}
