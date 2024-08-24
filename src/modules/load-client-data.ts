import { Client } from "../types";

export function renderClientData(clientData: Client) {
  const clientName = document.getElementById("clientName");
  const clientSince = document.getElementById("clientSince");
  const clientIdTag = document.getElementById("clientIdTag");
  const clientAvatar = document.getElementById(
    "clientAvatar"
  ) as HTMLImageElement;
  const totalCuts = document.getElementById("totalCuts");
  const cutsRemaining = document.getElementById("cutsRemaining");
  const fidelityCard = document.getElementById("fidelityCard");
  const appointmentHistory = document.getElementById("appointmentHistory");
  const totalCutsOfTen = document.getElementById("totalCutsOfTen");
  const progressBar = document.getElementById("cutsLeftProgressBar");

  if (
    !clientName ||
    !clientSince ||
    !clientIdTag ||
    !clientAvatar ||
    !totalCuts ||
    !cutsRemaining ||
    !appointmentHistory ||
    !fidelityCard ||
    !totalCutsOfTen ||
    !progressBar
  ) {
    console.log(
      clientName,
      clientSince,
      clientIdTag,
      totalCuts,
      cutsRemaining,
      appointmentHistory,
      fidelityCard,
      totalCutsOfTen,
      progressBar
    );
    throw new Error("Elemento não encontrado!");
  }

  clientName.textContent = clientData.name;

  clientSince.textContent = clientData.clientSince;

  clientIdTag.textContent = clientData.id;

  clientAvatar.src = clientData.clientAvatar;

  totalCuts.textContent = clientData.loyaltyCard.totalCuts.toString();

  cutsRemaining.textContent = clientData.loyaltyCard.cutsRemaining.toString();

  const haircutsRemaining = clientData.loyaltyCard.cutsRemaining;
  const totalHaircuts = clientData.loyaltyCard.totalCuts;

  const progressPercentage = (haircutsRemaining / totalHaircuts) * 100;

  progressBar.style.width = `${progressPercentage}%`;

  totalCutsOfTen.textContent = `${haircutsRemaining}/${totalHaircuts}`;

  fidelityCard.innerHTML = "";

  for (let i = 1; i <= clientData.loyaltyCard.totalCuts; i++) {
    const div = document.createElement("div");
    div.classList.add("fidelity-card-cut");
    const img = document.createElement("img");
    img.src = "./src/assets/PinCheck.svg";
    img.alt = "";
    div.appendChild(img);
    fidelityCard.appendChild(div);
  }

  for (let i = 1; i <= clientData.loyaltyCard.cutsRemaining; i++) {
    const div = document.createElement("div");
    div.classList.add("fidelity-card-cut");

    if (i === clientData.loyaltyCard.cutsRemaining) {
      const checkIcon = document.createElement("i");
      checkIcon.classList.add("fidelity-card-gift", "ph", "ph-gift");

      div.appendChild(checkIcon);
    }

    fidelityCard.appendChild(div);
  }

  appointmentHistory.innerHTML = "";

  clientData.appointmentHistory.forEach((appointment) => {
    const li = document.createElement("li");
    li.classList.add("history-record");

    const historyDateWrapper = document.createElement("div");
    historyDateWrapper.classList.add("history-date");

    const historyDate = document.createElement("strong");

    historyDate.textContent = appointment.date;

    const historyTime = document.createElement("span");

    historyTime.textContent = appointment.time;

    historyDateWrapper.appendChild(historyDate);
    historyDateWrapper.appendChild(historyTime);

    const historyCheck = document.createElement("div");
    historyCheck.classList.add("history-check");

    const checkIcon = document.createElement("i");
    checkIcon.classList.add("check", "ph", "ph-seal-check");

    historyCheck.appendChild(checkIcon);

    li.appendChild(historyDateWrapper);
    li.appendChild(historyCheck);

    appointmentHistory.appendChild(li);
  });
}
