import Image from "next/image"
import {cn} from "@/lib/utils";
import {collapsableVariants} from "@/components/ui/Collapsable";
import {textVariants} from "@/components/ui/Text";
import LargeHeading from "@/components/ui/LargeHeading";
import { Radon } from '@/components/svgs'
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
            <LargeHeading className="align-center dark:text-blue-200 justify-between p-7">Neon</LargeHeading>

            <div className="align-center text-black dark:text-blue-200 flex flex-col gap-10">




                <div className="flex flex-row-reverse bg-light-blue h-56 p-8 bg-opacity-50 rounded-2xl">
                    <div>
                        <li>Symbol: Ne</li>
                        <li>Atommasse: 20,1797 u</li>
                        <li>Ordnungszahl: 10</li>
                        <li>Siedepunkt: -246,1 °C</li>
                        <li>Schmelzpunkt: -248,6 °C</li>
                        <li>Elektronen pro Schale: 2, 8</li>
                        <li>Entdeckungsdatum: 1898</li>
                    </div>

                    <img className="object-contain w-64"
                         src="/images/Neon.png"
                         alt="Neon"
                    />

                </div>

                <hr className="border-gray-400 dark:border-gray-500 my-8 md:mb-16"/>

                {/*was ist es?*/}

                <Collapsable
                    heading="Was ist Neon für ein Element?"
                    content="Neon ist ein chemisches Element, das zur Gruppe der Edelgase gehört. Es befindet sich im Periodensystem der Elemente und hat die Ordnungszahl 10. Neon ist ein farbloses und geruchloses Gas."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Wo wird es eingesetzt?*/}

                <Collapsable
                    heading="Wo wird Neon eingesetzt?"
                    content="Neon wird in verschiedenen Anwendungen eingesetzt. Eine bekannte Verwendung findet es in der Beleuchtungstechnik, insbesondere in Neonröhren, die leuchtende Werbeschilder und Lichtinstallationen erzeugen. Neon wird auch in der Hochspannungstechnik verwendet, beispielsweise in Gasentladungslampen oder bei bestimmten elektronischen Anwendungen. Darüber hinaus findet es Anwendung in der Kryotechnik, bei der es zur Kühlung bestimmter Materialien und Experimente verwendet wird."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />

                {/*wie wird es gewonnen?*/}

                <Collapsable
                    heading="Wie wird Helium Gewonnen?"
                    content="Die Gewinnung von Neon erfolgt hauptsächlich durch fraktionierte Destillation von flüssiger Luft. Da Neon in der Atmosphäre nur in geringen Mengen vorkommt, wird es durch das Verfahren der Luftzerlegung isoliert. Dabei wird die Luft gekühlt und schrittweise in ihre Bestandteile zerlegt, wodurch Neon gewonnen werden kann."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Besondere Eigenschaften von Helium*/}

                <Collapsable
                    heading="Besondere Eigenschaften von Helium"
                    content="Neon hat einige besondere Eigenschaften. Eine auffällige Eigenschaft ist seine leuchtende Fähigkeit, wenn es in Gasentladungslampen angeregt wird. Es erzeugt ein charakteristisches oranges-rot leuchtendes Licht. Neon ist auch ungiftig, nicht brennbar und chemisch stabil. Diese Eigenschaften machen es zu einem sicheren und zuverlässigen Element in verschiedenen Anwendungen, insbesondere in der Beleuchtungstechnik und der Elektronik. Neon hat auch eine niedrige Reaktivität und geht normalerweise keine chemischen Bindungen mit anderen Elementen ein, wodurch es zu einem Edelgas wird."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Funfacts?*/}

                <Collapsable
                    heading="Funfacts über Helium"
                    content="Ein interessanter Fakt über Neon ist, dass es aufgrund seiner leuchtenden Eigenschaften in Gasentladungslampen den Begriff Neonlicht geprägt hat. Obwohl Neonlampen oft als Neonlichter bezeichnet werden, besteht das leuchtende Gas in den meisten kommerziellen Neonröhren tatsächlich aus einer Mischung von verschiedenen Edelgasen wie Neon, Argon und Helium. Die spezifische Zusammensetzung der Gase bestimmt die Farbe des erzeugten Lichts, wobei Neon beispielsweise das charakteristische orange-rote Leuchten erzeugt. Es ist faszinierend zu sehen, wie Neon seine bemerkenswerte leuchtende Eigenschaft für auffällige und faszinierende Lichteffekte nutzt."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />



            </div>
        </main>
    )
}
