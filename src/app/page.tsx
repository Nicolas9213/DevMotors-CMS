import { Container } from "@/components/Container";
import { Contact } from "@/components/Home/Contact";
import { Hero } from "@/components/Hero";
import { About } from "@/components/Home/About";
import { Services } from "@/components/Home/Services"
import { Submenu } from "@/components/Home/Submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Phone } from "lucide-react";
import { Footer } from "@/components/Footer";
import { MenuProps } from "@/utils/menu.type";


export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu} />}
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#fff" />}
      />
      <Container>
        <About object={object} />
        <Services object={object} />
        <Contact object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
}
