import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'

export function Comment() {
  return (
    <div className={style.comment}>
      <img src="https://github.com/ciceroff.png" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Nome</strong>
              <time title="11 de maio" dateTime="2023-02-17">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns</p>
        </div>
        <footer>
          {' '}
          <button>
            {' '}
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
