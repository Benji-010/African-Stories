function verifierQuiz() {
  let score = 0;

  // 🔹 BONNES RÉPONSES (À ADAPTER)
  const bonnesReponses = {
    q1: "b",
    q2: "c",
    q3: "c",
    q4: "d",
    q5: "c"
  };

  const totalQuestions = Object.keys(bonnesReponses).length;

  // 🔹 VÉRIFICATION DES RÉPONSES
  for (let question in bonnesReponses) {
    const reponseUtilisateur = document.querySelector(
      'input[name="' + question + '"]:checked'
    );

    if (!reponseUtilisateur) {
      document.getElementById("resultat").innerHTML = 
      "⚠️ Merci de répondre à toutes les questions avant de valider.";
      return;
    }
  }

  // Calcul du score et coloration des réponses

  for (let question in bonnesReponses) {
    const reponses = document.querySelectorAll('input[name="' + question + '"]');
    const reponseUtilisateur = document.querySelector(
      'input[name="' + question + '"]:checked'
    );

    reponses.forEach(input => {
      const label = input.parentElement;

      label.style.backgroundColor = "";
      label.style.color = "";
    });

    reponses.forEach(input => {
      const label = input.parentElement;

      // Bonne réponse
      if (input.value === bonnesReponses[question]) {
        label.style.backgroundColor = '#d4edda';
        label.style.color = '#155724';
      }

      // Mauvaise réponse
      if (input === reponseUtilisateur && input.value !== bonnesReponses[question]) {
        label.style.backgroundColor = '#f8d7da';
        label.style.color = '#721c24';
      }
    });

      if (reponseUtilisateur.value === bonnesReponses[question]) {
        score++;
      }
}

  // 🔹 MESSAGE SELON LE SCORE
  let message = "";

  if (score >= 4) {
    message = "Excellent ! Tu maîtrises très bien ces histoires.";
  } else if (score >= 2) {
    message = "Bon travail. Tu peux encore approfondir.";
  } else {
    message = "Relis les histoires pour mieux comprendre.";
  }

  // 🔹 AFFICHAGE DU RÉSULTAT
  document.getElementById("resultat").innerHTML = `
    <strong>Score :</strong> ${score} / ${totalQuestions}
    <br> ${message}`;

    document.getElementById("recommencer").style.display = "inline-block";
}

function recommencerQuiz() {
  const inputs = document.querySelectorAll('input[type="radio"]');
  inputs.forEach(input => {
    input.checked = false;
  });

  // Enlever toutes les couleurs
  const labels = document.querySelectorAll('label');
  labels.forEach(label => {
    label.style.backgroundColor = "";
    label.style.color = "";
  });

  // Effacerr le résultat
  document.getElementById("resultat").innerHTML = "";

  // Cacher le bouton recommencer
  document.getElementById("recommencer").style.display = "none";
}
