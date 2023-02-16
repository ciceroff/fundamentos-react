import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/ciceroff.png"
          />
          <div className={styles.authorInfo}>
            <strong>Nome</strong>
            <span>Cargo</span>
          </div>
        </div>

        <time dateTime="2023-02-16 16:09:10">Publicada há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>
          Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz
          no NLW return, evento da rocket seat
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>{' '}
        </p>
      </div>
    </article>
  )
}
