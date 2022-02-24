import axios from 'axios'
import { useFetch } from './hooks/useFetch'

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>('users/tava1/repos');

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => (
        <li key={repo.full_name}>
          <strong>{repo.full_name}</strong>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default App
