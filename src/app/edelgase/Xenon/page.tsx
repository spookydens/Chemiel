import {cn} from "@/lib/utils";
import {collapsableVariants} from "@/components/ui/Collapsable";
import {textVariants} from "@/components/ui/Text";
import LargeHeading from "@/components/ui/LargeHeading";
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/DropdownMenu'
import Logo from "@/components/visual/Logo";
import Collapsable from "@/components/ui/Collapsable";
import collapsable from "@/components/ui/Collapsable";
export default function Helium() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <LargeHeading className="align-center dark:text-blue-200 justify-between p-7">Xenon</LargeHeading>

            <div className="align-center text-black dark:text-blue-200 flex flex-col gap-10">




                <div className="flex flex-row-reverse bg-light-blue h-56 p-8 bg-opacity-50 rounded-2xl gap-8">
                    <div>
                        <li>Symbol: Xe</li>
                        <li>Atommasse: 131,293 u</li>
                        <li>Ordnungszahl: 54</li>
                        <li>Siedepunkt: -108,1 °C</li>
                        <li>Schmelzpunkt: -111,8 °C</li>
                        <li>Elektronen pro Schale: 2, 8, 18, 18, 8</li>
                        <li>Entdeckungsdatum: 1898</li>
                    </div>

                    <img className="object-contain w-48"
                         src="/images/Xenon.png"
                         alt="Xenon"
                    />

                </div>

                <hr className="border-gray-400 dark:border-gray-500 my-8 md:mb-16"/>

                {/*was ist es?*/}

                <Collapsable
                    heading="Was ist Xenon für ein Element?"
                    content="Xenon ist ein chemisches Element, das zur Gruppe der Edelgase gehört. Es befindet sich im Periodensystem der Elemente und hat die Ordnungszahl 54. Xenon ist ein farbloses und geruchloses Gas."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Wo wird es eingesetzt?*/}

                <Collapsable
                    heading="Wo wird Xenon eingesetzt?"
                    content="Xenon wird in verschiedenen Bereichen eingesetzt. Eine häufige Anwendung findet es in der Beleuchtungstechnik, insbesondere in Xenon-Lampen, die in Fahrzeugscheinwerfern und Projektoren verwendet werden. Xenon erzeugt ein helles und weißes Licht, das die Sicht verbessert und eine größere Helligkeit bietet. Es wird auch in der Medizintechnik genutzt, beispielsweise bei bestimmten bildgebenden Verfahren wie der Computertomographie."
                    globalColor='gray'
                    headingColor='blueTransparent'
                    globalStyle="rounded"
                />

                {/*wie wird es gewonnen?*/}

                <Collapsable
                    heading="Wie wird Xenon Gewonnen?"
                    content="Die Gewinnung von Xenon erfolgt in der Regel durch fraktionierte Destillation von flüssiger Luft. Da Xenon nur in geringen Mengen in der Atmosphäre vorkommt, wird es durch das Verfahren der Luftzerlegung isoliert. Dabei wird die Luft gekühlt und schrittweise in ihre Bestandteile zerlegt, wodurch Xenon gewonnen werden kann."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Besondere Eigenschaften von Helium*/}

                <Collapsable
                    heading="Besondere Eigenschaften von Xenon"
                    content="Eine besondere Eigenschaft von Xenon ist seine Verwendung in der Narkosemedizin. Xenon hat die einzigartige Fähigkeit, als inhalatives Narkosemittel verwendet zu werden. Es wirkt schnell und effektiv, bietet eine gute Steuerbarkeit der Narkosetiefe und erzeugt eine schnelle Erholung des Patienten nach der Anästhesie. Im Vergleich zu anderen Narkosemitteln hat Xenon auch ein geringes Potenzial für unerwünschte Nebenwirkungen. Diese Eigenschaft macht es zu einer wertvollen Option in der Anästhesie und hat zu einer verbesserten Patientensicherheit und -komfort beigetragen."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Funfacts?*/}

                <Collapsable
                    heading="Funfact über Xenon"
                    content="Ein interessanter Fakt über Xenon ist, dass es die einzige bekannte Substanz ist, die ein stabiles, neutrales Oxid bilden kann. Unter extremen Bedingungen wie hohem Druck und hoher Temperatur kann Xenon mit Sauerstoff reagieren und Xenonoxid (XeO3) bilden. Diese Fähigkeit zur Oxidation unterscheidet Xenon von anderen Edelgasen, die normalerweise chemisch inert sind. Die Entdeckung dieser ungewöhnlichen Eigenschaft von Xenon hat dazu beigetragen, unser Verständnis von chemischen Reaktionen und den Eigenschaften der Edelgase zu erweitern."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />



            </div>
        </main>
    )
}
