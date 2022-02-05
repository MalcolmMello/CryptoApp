import * as C from './styles'
import { Context } from '../../contexts/contexts'
import { useContext } from 'react'

interface Props {
    title: string,
    content: number | string | undefined
}

export const Stats = ({title, content}: Props) => {
    const { state } = useContext(Context)

    return (
        <C.GlobalStats theme={state.theme.theme}>
            <h3>{title}</h3>
            <p>{content}</p>
        </C.GlobalStats>
    )
}