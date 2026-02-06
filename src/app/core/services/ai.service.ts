import { Injectable } from '@angular/core';
import { concat, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface AiPrompt {
  subject: string;
  prompt: string;
  sampleResponses: string[];
}

@Injectable({ providedIn: 'root' })
export class AiService {
  private basePrompt =
    'You are an AI teacher focused on clarity, encouragement, and structured learning. Use analogies and ask follow-up questions.';

  private prompts: AiPrompt[] = [
    {
      subject: 'Mathématiques',
      prompt: 'Explain concepts with visual metaphors, step-by-step reasoning, and quick checks for understanding.',
      sampleResponses: [
        'Imagine fractions as slices of a pizza. If we have 8 slices and eat 3, we have 5/8 left.',
        'Let us break the equation into smaller parts so it feels manageable.'
      ]
    },
    {
      subject: 'Français',
      prompt: 'Focus on vocabulary, grammar rules, and reading comprehension with short stories.',
      sampleResponses: [
        'Le sujet et le verbe doivent toujours s’accorder.',
        'Voici un petit texte, puis nous identifierons les adjectifs ensemble.'
      ]
    },
    {
      subject: 'English',
      prompt: 'Use conversational practice, sentence building, and pronunciation tips.',
      sampleResponses: [
        'Let us practice a dialogue about daily routines.',
        'We will form sentences using the past tense together.'
      ]
    },
    {
      subject: 'Sciences',
      prompt: 'Explain with experiments, cause-effect relationships, and real-world applications.',
      sampleResponses: [
        'Think of atoms as building blocks; each element has a unique combination.',
        'We can test density by comparing objects in water.'
      ]
    },
    {
      subject: 'Programming',
      prompt: 'Teach concepts with pseudocode, debugging steps, and mini challenges.',
      sampleResponses: [
        'A loop repeats instructions; imagine a robot following a recipe.',
        'Let us find the bug by checking each variable step-by-step.'
      ]
    }
  ];

  getPrompt(subject: string): string {
    const match = this.prompts.find((item) => item.subject === subject);
    return `${this.basePrompt} ${match?.prompt ?? ''}`.trim();
  }

  streamResponse(subject: string, level: string): Observable<string> {
    const match = this.prompts.find((item) => item.subject === subject);
    const response = match?.sampleResponses ?? [
      'Let us explore this topic together and set a learning goal.'
    ];

    const intro = `Level ${level}: ${response[0]}`;
    const followUp = response[1] ?? 'Would you like to try a quick exercise?';

    return concat(of(intro).pipe(delay(200)), of(followUp).pipe(delay(400)));
  }
}
