import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AiService } from './ai.service';

describe('AiService', () => {
  let service: AiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiService);
  });

  it('streams an AI response in chunks', fakeAsync(() => {
    const chunks: string[] = [];

    service.streamResponse('Mathématiques', 'High').subscribe((chunk) => chunks.push(chunk));

    tick(600);
    expect(chunks.length).toBe(2);
  }));
});
