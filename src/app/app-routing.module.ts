import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { InsertUserComponent } from "./insert-user/insert-user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";

const routes: Routes = [
  { path: "", redirectTo: "/view", pathMatch: "full" },
  { path: "view", component: ViewComponent },
  { path: "insertUser", component: InsertUserComponent },
  { path: "updateUser/:uId", component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
