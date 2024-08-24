import { getClientData } from "../../services/get-client-data";
import { isClientIdValid } from "../../utils/is-client-id-valid";
import { renderClientData } from "../load-client-data";

const form = document.querySelector("form") as HTMLFormElement;
const clientId = document.getElementById("clientId") as HTMLInputElement;

if (!form) {
  throw new Error("Form not found");
}

form.onsubmit = async (event) => {
  event.preventDefault();

  const validClientId =
    clientId && clientId.value && isClientIdValid(clientId.value);

  if (!validClientId) {
    alert("Formato do ID é inválido!");
    return;
  }

  const clientData = await getClientData(clientId.value);

  if (!clientData) {
    alert("Cliente inexistente!");
    return;
  }

  console.log(clientData);

  renderClientData(clientData);
};
