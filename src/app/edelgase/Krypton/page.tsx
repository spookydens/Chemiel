import Image from "next/image"
import {cn} from "@/lib/utils";
import collapsableVariants from "@/components/ui/Collapsable";
import {textVariants} from "@/components/ui/Text";
import LargeHeading from "@/components/ui/LargeHeading";
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
            <LargeHeading className="align-center dark:text-blue-200 justify-between p-7">Krypton</LargeHeading>

            <div className="align-center text-black dark:text-blue-200 flex flex-col gap-10">




                <div className="flex flex-row-reverse bg-light-blue h-56 p-8 bg-opacity-50 rounded-2xl">
                    <div>
                        <li>Symbol: Kr</li>
                        <li>Atommasse: 83,798 u</li>
                        <li>Ordnungszahl: 36</li>
                        <li>Siedepunkt: -153,4 °C</li>
                        <li>Schmelzpunkt: -157,2 °C</li>
                        <li>Elektronen pro Schale: 2, 8, 18, 8</li>
                        <li>Entdeckungsdatum: 1898</li>
                    </div>

                    <img className="object-contain w-48"
                         src="/images/Krypton.png"
                         alt="Krypton"
                    />
                </div>

                <hr className="border-gray-400 dark:border-gray-500 my-8 md:mb-16"/>

                {/*was ist es?*/}

                <Collapsable
                    heading="Was ist Krypton für ein Element?"
                    content="Krypton ist ein chemisches Element, das zur Gruppe der Edelgase gehört. Es befindet sich im Periodensystem der Elemente und hat die Ordnungszahl 36. Krypton ist ein farbloses und geruchloses Gas."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Wo wird es eingesetzt?*/}

                <Collapsable
                    heading="Wo wird Krypton eingesetzt?"
                    content="Krypton wird in verschiedenen Bereichen eingesetzt. Eine wichtige Anwendung findet es in der Beleuchtungstechnik, insbesondere in Krypton-Gasentladungslampen. Diese Lampen werden in bestimmten Arten von Scheinwerfern und Blitzlichtgeräten verwendet, um helles und effizientes Licht zu erzeugen. Krypton wird auch in der Fensterglasproduktion genutzt, um Wärmeverluste zu verringern und die Energieeffizienz zu verbessern."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />

                {/*wie wird es gewonnen?*/}

                <Collapsable
                    heading="Wie wird Krypton Gewonnen?"
                    content="Die Gewinnung von Krypton erfolgt normalerweise durch fraktionierte Destillation von flüssiger Luft. Da Krypton in der Atmosphäre nur in geringen Mengen vorkommt, wird es durch das Verfahren der Luftzerlegung isoliert. Dabei wird die Luft gekühlt und schrittweise in ihre Bestandteile zerlegt, wodurch Krypton gewonnen werden kann."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />

                {/*Besondere Eigenschaften von Helium*/}

                <Collapsable
                    heading="Besondere Eigenschaften von Krypton"
                    content="Besondere Eigenschaften von Krypton sind seine Verwendung in Beleuchtungssystemen, wo es helles und effizientes Licht erzeugen kann. Es ist auch bekannt für seine Isolationsfähigkeit, was es zu einem guten Füllgas für Doppelglasfenster macht, um den Wärmeverlust zu minimieren. Krypton weist auch eine hohe Dichte auf und kann bei tiefen Temperaturen kondensieren, wodurch es in den flüssigen Zustand übergeht. Diese Eigenschaften machen es nützlich in verschiedenen technischen Anwendungen."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Funfacts?*/}

                <Collapsable
                    heading="Funfact über Krypton"
                    content="Ein unterhaltsamer Fakt über Krypton ist, dass es in der Welt der Comics als Heimatplanet von Superman dient. In den Superman-Geschichten stammt der Superheld von dem fiktiven Planeten Krypton, der in einer weit entfernten Galaxie liegt. Der Name des Elements Krypton wurde tatsächlich von den Comicautoren übernommen, um den Heimatplaneten des ikonischen Superhelden zu benennen. Es ist interessant zu sehen, wie wissenschaftliche Elemente ihren Weg in die Popkultur finden und zu einem wichtigen Bestandteil von Geschichten und Charakteren werden."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />



            </div>
        </main>
    )
}
