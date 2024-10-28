import React from 'react';

interface NavBarProps {
  onPrevious: () => void;  // Fonction appelée au clic sur "Précédent"
  onNext: () => void;      // Fonction appelée au clic sur "Suivant"
  showPrevious: boolean;   // Condition pour afficher le bouton "Précédent"
  showNext: boolean;       // Condition pour afficher le bouton "Suivant"
}

const NavBar: React.FC<NavBarProps> = ({ onPrevious, onNext, showPrevious, showNext }) => {
  return (
    <div>
      {/* Bouton Précédent affiché uniquement si showPrevious est vrai */}
      {showPrevious && (
        <button onClick={onPrevious}>Précédent</button>
      )}

      {/* Bouton Suivant affiché uniquement si showNext est vrai */}
      {showNext && (
        <button onClick={onNext}>Suivant</button>
      )}
    </div>
  );
};

export default NavBar;

