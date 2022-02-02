import * as C from './styles'

interface Props {
    title: string,
    content: number | string | undefined
}

export const Stats = ({title, content}: Props) => {
    return (
        <C.GlobalStats>
            <h3>{title}</h3>
            <p>{content}</p>
        </C.GlobalStats>
    )
}