import Image from "next/image"
import {cn} from "@/lib/utils";
import {collapsableVariants} from "@/components/ui/Collapsable";
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
            <LargeHeading className="align-center dark:text-blue-200 justify-between p-7">Radon</LargeHeading>

            <div className="align-center text-black dark:text-blue-200 flex flex-col gap-10">




                <div className="flex flex-row-reverse bg-light-blue h-56 p-8 bg-opacity-50 rounded-2xl">
                    <div>
                        <li>Symbol: Rn</li>
                        <li>Atommasse: 222,0176 u</li>
                        <li>Ordnungszahl: 86</li>
                        <li>Siedepunkt: -61,7 °C</li>
                        <li>Schmelzpunkt: -71,2 °C</li>
                        <li>Elektronen pro Schale: 2, 8, 18, 32, 18, 8</li>
                        <li>Entdeckungsdatum: 1898</li>
                    </div>

                    <img className="object-contain w-48"
                         src="/images/Radon.png"
                         alt="Radon"
                    />

                </div>

                <hr className="border-gray-400 dark:border-gray-500 my-8 md:mb-16"/>

                {/*was ist es?*/}

                <Collapsable
                    heading="Was ist Radon für ein Element?"
                    content="Radon ist ein chemisches Element, das zur Gruppe der Edelgase gehört. Es befindet sich im Periodensystem der Elemente und hat die Ordnungszahl 86. Radon ist ein farbloses und geruchloses Gas."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Wo wird es eingesetzt?*/}

                <Collapsable
                    heading="Wo wird Radon eingesetzt?"
                    content="Radon wird hauptsächlich in Bezug auf seine radioaktiven Eigenschaften betrachtet. Es ist ein natürlich vorkommendes Element, das als Zerfallsprodukt von Uran und Thorium entsteht. Aufgrund seiner radioaktiven Natur wird Radon in der Regel nicht gezielt eingesetzt, sondern es wird vielmehr als potenziell gesundheitsschädlich angesehen, insbesondere in hohen Konzentrationen in geschlossenen Räumen."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />

                {/*wie wird es gewonnen?*/}

                <Collapsable
                    heading="Wie wird Radon Gewonnen?"
                    content="Radon entsteht in der Natur als Zerfallsprodukt von Uran und Thorium in Gesteinen und Böden. Es kann in Gebäude eindringen, insbesondere in Keller oder schlecht belüfteten Bereichen. Die Gewinnung von Radon erfolgt daher nicht im eigentlichen Sinne, sondern es wird erkannt und gemessen, um Maßnahmen zur Reduzierung der Radonkonzentration in Innenräumen zu ergreifen."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />



                {/*Besondere Eigenschaften von Helium*/}

                <Collapsable
                    heading="Besondere Eigenschaften von Helium"
                    content="Eine besondere Eigenschaft von Radon ist seine radioaktive Natur. Es ist ein Alphastrahler und emittiert Alpha-Teilchen, die beim radioaktiven Zerfall entstehen. Diese radioaktive Aktivität macht Radon zu einem gesundheitlichen Risiko, insbesondere wenn es in geschlossenen Räumen in hohen Konzentrationen vorhanden ist. Es ist wichtig, die Radonkonzentration in Innenräumen zu überwachen und geeignete Maßnahmen zur Reduzierung einzuleiten, um die Exposition zu minimieren und potenzielle gesundheitliche Auswirkungen zu vermeiden."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />


                {/*Funfact?*/}

                <Collapsable
                    heading="FunFact über Radon"
                    content="Ein FunFakt über Radon ist, dass es aufgrund seiner radioaktiven Eigenschaften als eines der führenden Umweltgesundheitsrisiken gilt. Laut der Weltgesundheitsorganisation (WHO) ist Radon nach dem Rauchen die zweithäufigste Ursache für Lungenkrebs. Es wird geschätzt, dass jährlich weltweit etwa 3-14 Prozent der Lungenkrebsfälle auf Radonexposition zurückzuführen sind. Daher ist es wichtig, die Radonkonzentration in Innenräumen zu überwachen und gegebenenfalls Maßnahmen zu ergreifen, um das Risiko für die Gesundheit zu reduzieren."
                    globalStyle='rounded'
                    globalColor='gray'
                    headingColor='blueTransparent'
                />



            </div>
        </main>
    )
}
