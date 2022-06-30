import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { CallToActionComponent } from '../../../../../ui/src';
import { RecruitingTimelineEntryComponent } from '../recruiting-timeline-entry/recruiting-timeline-entry.component';

@Component({
  selector: 'cp-recruiting-timeline',
  templateUrl: './recruiting-timeline.component.html',
  imports: [
    CommonModule,
    TranslocoModule,
    RecruitingTimelineEntryComponent,
    CallToActionComponent,
  ],
  standalone: true,
  styleUrls: ['./recruiting-timeline.component.scss'],
})
export class RecruitingTimelineComponent {
  entries = [
    {
      header: 'recruiting-process.timeline.documents.header',
      content: 'recruiting-process.timeline.documents.content',
    },
    {
      header: 'recruiting-process.timeline.cultural-fit.header',
      content: 'recruiting-process.timeline.cultural-fit.content',
    },
    {
      header: 'recruiting-process.timeline.meet.header',
      content: 'recruiting-process.timeline.meet.content',
    },
    {
      header: 'recruiting-process.timeline.exam.header',
      content: 'recruiting-process.timeline.exam.content',
    },
    {
      header: 'recruiting-process.timeline.contract.header',
      content: 'recruiting-process.timeline.contract.content',
    },
  ];
}
