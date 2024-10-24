import styles from '@/components/Footer/styles.module.scss'
import { HomeProps } from '@/utils/home.type'
import { Phone } from 'lucide-react'

export function Footer({ object }: HomeProps) {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyText}>
                Todos os direitos reservados {object.title} @{`${new Date().getFullYear()}`}
            </p>
        </footer>
    )
}