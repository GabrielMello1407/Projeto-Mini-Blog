import { Link } from 'react-router-dom'
import style from './Search.module.css'
//components
import PostDetail from '../../components/PostDetail'

//hooks
import { useFetchDocuments } from '../../hooks/UseFetchDocuments'
import { useQuery } from '../../hooks/UseQuery'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents:posts} = useFetchDocuments("posts", search)
  return (
    <div className={style.search_container}>
        <h2>Search</h2>
        <div>
            {posts && posts.length === 0 && (
                <div className={style.noposts}>
                <p>Não foram encontrados posts a partir da sua busca...</p>
                <Link to="/" className='btn btn-dark'>Voltar</Link>
                </div>
            )}
            {posts && posts.map((posts) => (
                <PostDetail key={posts.id} post={posts}/>
            ))}
        </div>
    </div>
  )
}

export default Search