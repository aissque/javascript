import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-management',
  templateUrl: './ai-management.component.html',
  styleUrls: ['./ai-management.component.scss']
})
export class AiManagementComponent {
  configs = [
    { label: 'AI response tone', value: 'Supportive' },
    { label: 'Feedback cadence', value: 'Every session' },
    { label: 'Language pack', value: 'French + English' }
  ];
}
