import { useParams } from "react-router"

export default function Post() {
    const parametros = useParams();

    console.log(parametros)

    return (
        <h1>Post {parametros.id}</h1>
    )
}