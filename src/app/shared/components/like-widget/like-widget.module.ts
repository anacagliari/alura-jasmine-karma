import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService]
})
export class LikeWidgetModule {}
