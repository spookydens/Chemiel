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
            <LargeHeading className="align-center dark:text-blue-200 justify-between p-7">Argon</LargeHeading>

            <div className="align-center text-black dark:text-blue-200 flex flex-col gap-10">




                <div className="flex flex-row-reverse bg-light-blue h-56 p-8 bg-opacity-50 rounded-2xl">
                    <div>
                        <li>Symbol: Ar</li>
                        <li>Atommasse: 39,948 u</li>
                        <li>Ordnungszahl: 18</li>
                        <li>Siedepunkt: -185,9 °C</li>
                        <li>Schmelzpunkt: -189,3 °C</li>
                        <li>Elektronen pro Schale: 2, 8, 8</li>
                        <li>Entdeckungsdatum: 1894</li>
                    </div>

                    <img className="object-contain w-48"
                         src="/images/Argon.png"
                         alt="Argon"
                    />

                </div>

                <hr className="border-gray-400 dark:border-gray-500 my-8 md:mb-16"/>

                {/*was ist es?*/}

                <Collapsable
                    heading="Was ist Argon für ein Element?"
                    content="Argon ist ein chemisches Element, das zur Gruppe der Edelgase gehört. Es befindet sich im Periodensystem der Elemente und hat die Ordnungszahl 18. Argon ist ein farbloses und geruchloses Gas."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Wo wird es eingesetzt?*/}

                <Collapsable
                    heading="Wo wird Helium eingesetzt?"
                    content="Argon wird in verschiedenen Bereichen eingesetzt. Eine wichtige Anwendung findet es in der Industrie, insbesondere beim Schutz empfindlicher Materialien und Prozesse. Argon wird verwendet, um Sauerstoff und Feuchtigkeit aus einem Raum oder einer Umgebung zu verdrängen, um Oxidation und Korrosion zu verhindern. Es wird auch in der Beleuchtungstechnik verwendet, beispielsweise in argongefüllten Glühlampen oder als Füllgas in Plasmafernsehern."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />

                {/*wie wird es gewonnen?*/}

                <Collapsable
                    heading="Wie wird Argon gewonnen?"
                    content="Die Gewinnung von Argon erfolgt hauptsächlich durch fraktionierte Destillation von flüssiger Luft. Da Argon in der Atmosphäre nur in geringen Mengen vorkommt, wird es durch das Verfahren der Luftzerlegung isoliert. Dabei wird die Luft gekühlt und schrittweise in ihre Bestandteile zerlegt, wodurch Argon gewonnen werden kann."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Besondere Eigenschaften von Helium*/}

                <Collapsable
                    heading="Besondere Eigenschaften von Argon"
                    content="Besondere Eigenschaften von Argon sind seine hohe Dichte und seine Isolationsfähigkeit. Aufgrund dieser Eigenschaften wird Argon häufig in technischen Anwendungen verwendet, um einen Schutzraum zu schaffen oder als Inertgas in Schweißverfahren eingesetzt. Argon ist auch ungiftig, nicht brennbar und chemisch stabil. Diese Eigenschaften machen es zu einem sicheren und zuverlässigen Element in verschiedenen Anwendungen, insbesondere in der Industrie und der Beleuchtungstechnik."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Funfacts?*/}

                <Collapsable
                    heading="Funfact über Argon"
                    content="Ein interessanter Fakt über Argon ist, dass es das dritthäufigste Gas in der Erdatmosphäre ist. Obwohl Argon etwa 0,93 Prozent der Luft ausmacht, wird es oft übersehen, da es farblos und geruchlos ist. Es ist faszinierend zu bedenken, dass wir täglich Argon einatmen, ohne es zu bemerken, und es dennoch eine wichtige Rolle in verschiedenen industriellen Anwendungen spielt, insbesondere beim Schutz empfindlicher Materialien."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />



            </div>
        </main>
    )
}
