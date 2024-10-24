import styles from '@/app/post/[slug]/styles.module.scss'
import { Hero } from '@/components/Hero';
import { getItemBySlug } from '@/utils/actions/get-data'
import { PostProps } from '@/utils/post.type';
import { Phone } from 'lucide-react';


export default async function Page({ params: { slug } }: {
    params: { slug: string }
}) {

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
        </>
    )
}