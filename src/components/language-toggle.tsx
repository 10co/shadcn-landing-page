import { changeLanguage, languages } from '@/i18n/config';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Languages className="mr-1 h-4 w-4" />
          <span className="text-sm font-medium w-6">
            {languages
              .find((language) => language.value === i18n.language)
              ?.label.slice(0, 2)}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.value}
            onClick={() => changeLanguage(language.value)}
          >
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
