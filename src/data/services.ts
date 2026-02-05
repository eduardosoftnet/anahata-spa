export interface Service {
    id: string;
    slug: string;
    title: string;
    shortDesc: string;
    longDesc: string;
    icon: string;
    subServices: string[];
}

export const services: Service[] = [
    {
        id: "1",
        slug: "masajes-relajantes",
        title: "Masajes Relajantes",
        shortDesc: "Técnicas suecas y de tejido profundo para aliviar la tensión.",
        longDesc: "Sumérgete en un estado de calma absoluta con nuestros masajes relajantes. Utilizamos una combinación de técnicas suecas suaves y manipulaciones de tejido profundo personalizadas para liberar la tensión acumulada en tus músculos. Este tratamiento no solo alivia el dolor físico y mejora la circulación, sino que también reduce el estrés y la ansiedad, promoviendo un bienestar integral. Ideal para desconectar del ritmo acelerado de la vida diaria y reencontrarte contigo mismo.",
        icon: "💆‍♀️",
        subServices: [
            "Masaje Sueco Clásico",
            "Masaje de Tejido Profundo",
            "Aromaterapia",
            "Masaje con Piedras Calientes",
            "Masaje Ayurveda"
        ]
    },
    {
        id: "2",
        slug: "faciales-rejuvenecedores",
        title: "Faciales Rejuvenecedores",
        shortDesc: "Tratamientos personalizados para iluminar y nutrir tu piel.",
        longDesc: "Devuélvele a tu piel su brillo natural con nuestros faciales rejuvenecedores. Cada sesión comienza con un análisis detallado de tu tipo de piel para seleccionar los productos más adecuados, ricos en vitaminas y antioxidantes. Mediante técnicas de limpieza profunda, exfoliación suave y masajes estimulantes, eliminamos impurezas y promovemos la regeneración celular. El resultado es una piel visiblemente más fresca, hidratada y radiante, con una textura suave y un tono uniforme.",
        icon: "✨",
        subServices: [
            "Limpieza Profunda",
            "Hidratación Intensiva",
            "Tratamiento Anti-edad",
            "Peeling Enzimático"
        ]
    },
    {
        id: "3",
        slug: "reductores",
        title: "Reductores",
        shortDesc: "Tratamientos enfocados en moldear tu figura y reducir medidas con técnicas especializadas.",
        longDesc: "Nuestros tratamientos reductores están diseñados para ayudarte a esculpir tu figura y alcanzar tus objetivos corporales. Combinamos masajes manuales vigorosos con aparatología de vanguardia para atacar depósitos de grasa localizados y mejorar la firmeza de la piel. Este enfoque integral estimula el metabolismo y favorece la eliminación de toxinas, ayudando a reducir centímetros en áreas clave como abdomen, piernas y brazos. Un complemento perfecto para tu estilo de vida saludable.",
        icon: "📏",
        subServices: [
            "Maderoterapia",
            "Masaje Drenante",
            "Vendas Frías",
            "Cavitación"
        ]
    },
    {
        id: "4",
        slug: "presoterapia",
        title: "Presoterapia",
        shortDesc: "Presión de aire para estimular la circulación sanguínea.",
        longDesc: "La presoterapia es un tratamiento terapéutico y estético que utiliza la presión de aire controlada para realizar un drenaje linfático profundo. Al mejorar la circulación sanguínea y linfática, este tratamiento es excelente para combatir la retención de líquidos, aliviar la sensación de piernas cansadas y reducir la celulitis. Es una experiencia relajante e indolora que te dejará con una sensación de ligereza y bienestar revitalizante en todo el cuerpo.",
        icon: "💨",
        subServices: [
            "Drenaje Linfático",
            "Piernas Cansadas",
            "Recuperación Deportiva",
            "Detox Corporal"
        ]
    },
];
