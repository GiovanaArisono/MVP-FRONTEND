const listarAnimaisParaAdocao = async () => {
  const cardContainer = document.getElementById("card-container");
  let url = "http://127.0.0.1:5000/animalzinhos";
  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
        cardContainer.innerHTML = '';
      data.forEach((item) => {
        cardContainer.innerHTML += criarCardDeAdocao(item);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

listarAnimaisParaAdocao();

const criarCardDeAdocao = (item) => {
  return `
      <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Oii, eu sou a/o ${item.nome}</h5>
                <p class="card-text">Espécie: ${item.especie}</p>
                <p class="card-text">Idade: ${item.idade}</p>
                <p class="card-text">Raça: ${item.raca}</p>
                <p class="card-text">Descrição: ${item.descricao}</p>
                <button onclick="adotar(${item.id})" class="btn btn-primary">Adotar</button>
            </div>
        </div>
      </div>
    `;
};

const cadastrarAnimalzinho = () => {
    let nomeAnimalzinho = document.getElementById("nomeAnimalzinho").value;
    let especieAnimalzinho = document.getElementById("especieAnimalzinho").value;
    let racaAnimalzinho = document.getElementById("racaAnimalzinho").value;
    let idadeAnimalzinho = document.getElementById("idadeAnimalzinho").value;
    let descricaoAnimalzinho = document.getElementById("descricaoAnimalzinho").value;
  
    const animalzinhoData = {
        nome: nomeAnimalzinho,
        especie: especieAnimalzinho,
        raca: racaAnimalzinho,
        idade: idadeAnimalzinho,
        descricao: descricaoAnimalzinho
    };
      
    let url = 'http://127.0.0.1:5000/animalzinhos';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(animalzinhoData)
    })
    .then((response) => {
        console.log(response.json())
        alert("Animalzinho cadastrado com sucesso!")
        listarAnimaisParaAdocao();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }

  const adotar = (id) => {
    let url = 'http://127.0.0.1:5000/animalzinhos/' + id;
    fetch(url, {
      method: 'delete'
    })
      .then((response) => {
        alert("Animalzinho adotado com sucesso!")
        listarAnimaisParaAdocao();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }