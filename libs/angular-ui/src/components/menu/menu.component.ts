import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-menu',
  template: `
    <ul class="nav nav-tabs" style="white-space: nowrap;">
      <ng-container *ngFor="let item of links">
        <li class="nav-item d-inline-block">
          <a href="#" [routerLink]="item.url" class="nav-link" routerLinkActive="active">
            <i class="{{ item.icon }}" *ngIf="item.icon"></i>
            {{item.name}}
          </a>
          <div class="nav-submenu nav" *ngIf="item.subpages">
            <ng-container *ngFor="let subitem of item.subpages">
              <a href="#" class="nav-item" [routerLink]="subitem.url" routerLinkActive="active">
                <i class="{{ subitem.icon }}" *ngIf="subitem.icon"></i>
                {{subitem.name}}
              </a>
            </ng-container>
          </div>
        </li>
      </ng-container>
    </ul>
  `,
  styles: []
})
export class MenuComponent {
  @Input() public links = []
}
