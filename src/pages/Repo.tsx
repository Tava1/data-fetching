import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import { Repository } from "./Repos";

export function Repo() {
  const params = useParams();
  const currentRepository = params['*'] as string;

  const queryClient = useQueryClient();

  async function handleChangeRepositoryDescription() {
    // *ESSA FUNÇÃO SE TRATA APENAS DE UMA SIMULAÇÃO*

    // await queryClient.invalidateQueries(['repos']) invalidando toda a requisição
    /*
      Chamada API para atualizar a descrição do repositório...
      
      {...}
    */

    // capturando repos no cache, dados anteriores
    const previousRepos = queryClient.getQueryData<Repository[]>('repos')

    // Atualizando dados em cache sem executar um novo get para a API.
    if (previousRepos) {
      const nextRepos = previousRepos.map(repo => {
        if (repo.full_name === currentRepository) {
          return { ...repo, description: 'Testando' }
        }
        else {
          return repo;
        }
      })

      queryClient.setQueriesData('repos', nextRepos);
    }

  }

  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>Alterar</button>
    </div>
  )
}