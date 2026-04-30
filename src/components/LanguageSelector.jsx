import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSelector.css';

const LANGUAGES = [
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const current = LANGUAGES.find((l) => l.code === lang);

  const handleSelect = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className="lang-selector">
      <button
        className="lang-selector__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Selecionar idioma"
        aria-expanded={open}
      >
        <span className="lang-selector__flag">{current.flag}</span>
        <span className="lang-selector__code">{current.code.toUpperCase()}</span>
        <i className={`bi bi-chevron-${open ? 'down' : 'up'}`}></i>
      </button>

      {open && (
        <ul className="lang-selector__menu" role="listbox">
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button
                className={`lang-selector__option${l.code === lang ? ' active' : ''}`}
                onClick={() => handleSelect(l.code)}
              >
                <span className="lang-selector__flag">{l.flag}</span>
                <span>{l.label}</span>
                {l.code === lang && <i className="bi bi-check2"></i>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
