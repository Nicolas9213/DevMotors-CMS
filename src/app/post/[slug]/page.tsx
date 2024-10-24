import styles from '@/app/post/[slug]/styles.module.scss'
import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { getItemBySlug } from '@/utils/actions/get-data'
import { PostProps } from '@/utils/post.type';
import { Phone } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(
    props: {
      params: Promise<{ slug: string }>  
    }
): Promise<Metadata> {
    const params = await props.params;

    const {
        slug
    } = params;

    try {
        const { objects }: PostProps = await getItemBySlug(slug)
        .catch(() => {
            return {
                title: "DevMotors - Sua oficina especializada",
                description: "Oficina de carros em São Paulo",
            }
        })

        return {
            title: `DevMotors - ${objects[0].title}`,
            description: `${objects[0].metadata.description.text}`,
            keywords:["devmotors", "troca de oleo", "devmotors troca de oleo"],
            openGraph: {
                title: `DevMotors - ${objects[0].title}`,
                images: [objects[0].metadata.banner.url]
              },
              robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                  index: true,
                  follow: true,
                  noimageindex: true,
                }
              }
        }
    } catch(err) {
        return {
            title: "DevMotors - Sua oficina especializada",
            description: "Oficina de carros em São Paulo",
        }
    }
}


export default async function Page(
    props: {
        params: Promise<{ slug: string }>
    }
) {
    const params = await props.params;

    const {
        slug
    } = params;

    const { objects }: PostProps = await getItemBySlug(slug);

    return (
        <>
            <Hero
                heading={objects[0].title}
                buttonTitle={objects[0].metadata.button.title}
                buttonUrl={objects[0].metadata.button.url}
                bannerUrl={objects[0].metadata.banner.url}
                icon={<Phone size={24} color="#fff" />}
            />
            <Container>
                <section className={styles.about}>
                    <article className={styles.innerAbout}>
                        <h1>{objects[0].metadata.description.title}</h1>
                        <p>{objects[0].metadata.description.text}</p>
                        {objects[0].metadata.description.button_active && (
                            <a
                                href={objects[0].metadata.description.button_url as string}
                                target='_blank'
                                className={styles.link}
                            >
                                {objects[0].metadata.description.button_title}
                            </a>
                        )}
                    </article>
                    <div className={styles.bannerAbout}>
                        <Image
                            className={styles.imageAbout}
                            alt={objects[0].title}
                            quality={100}
                            fill={true}
                            priority={true}
                            src={objects[0].metadata.description.banner.url}
                            sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                        />
                    </div>
                </section>
            </Container>
        </>
    )
}