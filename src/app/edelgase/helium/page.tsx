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
                        <li>Symbol: He</li>
                        <li>Atommasse: 4,002602 u</li>
                        <li>Ordnungszahl: 2</li>
                        <li>Siedepunkt: -268,9 °C</li>
                        <li>Schmelzpunkt: -272,2 °C</li>
                        <li>Elektronen pro Schale: 2</li>
                        <li>Entdeckungsdatum: 1868</li>
                    </div>

                    <img className="object-contain w-64"
                        src="/images/Helium.png"
                        alt="Helium"
                    />
                </div>


                <hr className="border-gray-400 dark:border-gray-500 my-8 md:mb-16"/>

                {/*was ist es?*/}

                <Collapsable
                    heading="Was ist Helium für ein Element?"
                    content="Helium ist ein chemisches Element, das zur Gruppe der Edelgase gehört. Es ist ein farbloses, geruchloses und geschmackloses Gas. Helium wird in verschiedenen Bereichen eingesetzt. Eine bekannte Anwendung ist das Füllen von Ballons, da Helium leichter als Luft ist und sie zum Schweben bringt. "
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Wo wird es eingesetzt?*/}

                <Collapsable
                    heading="Wo wird Helium eingesetzt?"
                    content="Helium wird in der Luft- und Raumfahrttechnik verwendet, beispielsweise in Raketen und Luftschiffen. In der Medizin findet Helium Verwendung bei der Kühlung von Magnetresonanztomographen."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />

                {/*wie wird es gewonnen?*/}

                <Collapsable
                    heading="Wie wird Helium Gewonnen?"
                    content="Helium wird hauptsächlich aus natürlichen Erdgasvorkommen gewonnen. Bei der Förderung von Erdgas wird das Helium daraus abgetrennt. Es kann auch durch das Abkühlen von Erdgas auf sehr niedrige Temperaturen gewonnen werden, wodurch es von anderen Bestandteilen getrennt wird."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Besondere Eigenschaften von Helium*/}

                <Collapsable
                    heading="Besondere Eigenschaften von Helium"
                    content="Einige besondere Eigenschaften von Helium sind seine geringe Dichte, die ihm ermöglicht, in Ballons zu steigen, und sein niedriger Siedepunkt, der es in den flüssigen Zustand übergehen lässt, wenn es stark gekühlt wird. Helium hat auch die Fähigkeit, bei sehr niedrigen Temperaturen supraleitend zu werden, was bedeutet, dass es elektrischen Strom ohne Widerstand leiten kann. Dies macht es in der Forschung und Technologie äußerst wertvoll."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Funfacts?*/}

                <Collapsable
                    heading="Funfact über Helium"
                    content="Ein unterhaltsamer Fakt über Helium ist, dass es das einzige Element im Periodensystem ist, das zuerst auf der Sonne entdeckt wurde, bevor es auf der Erde nachgewiesen wurde. Der Name Helium leitet sich von Helios ab, dem griechischen Wort für Sonne. Wissenschaftler erkannten zunächst das Vorhandensein von Helium in der Sonnenatmosphäre, bevor es auf der Erde in natürlichen Gasvorkommen entdeckt wurde. Dieser Zusammenhang zwischen Helium und der Sonne macht es zu einem faszinierenden Element mit einer einzigartigen Herkunftsgeschichte."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />



            </div>
        </main>
    )
}


