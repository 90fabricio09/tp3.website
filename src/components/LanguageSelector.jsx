import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSelector.css';

const LANGUAGES = [
  {
    code: 'pt',
    short: 'PT',
    label: 'Português',
    flagSrc: 'https://flagcdn.com/w40/pt.png',
  },
  {
    code: 'en',
    short: 'EN',
    label: 'English',
    flagSrc: 'https://flagcdn.com/w40/gb.png',
  },
  {
    code: 'es',
    short: 'ES',
    label: 'Español',
    flagSrc: 'https://flagcdn.com/w40/es.png',
  },
];

function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

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
        <img src={current.flagSrc} alt="" className="lang-selector__flag" loading="lazy" />
        <span className="lang-selector__code">{current.short}</span>
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
                <img src={l.flagSrc} alt="" className="lang-selector__flag" loading="lazy" />
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
