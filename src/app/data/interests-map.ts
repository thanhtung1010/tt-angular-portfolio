import { InterestGraph } from "@interfaces";

export const INTERESTS_DATA: InterestGraph = {
    nodes: [
        // Root
        { id: 'root', label: '', group: 'root', type: 'root' },

        // Economy (Blue)
        { id: 'Economy', label: 'Economy', group: 'economy', type: 'category' },
        { id: 'Stock Market', label: 'Stock Market', group: 'economy', type: 'item' },
        { id: 'UK Economy', label: 'UK Economy', group: 'economy', type: 'item' },
        { id: 'Optimization', label: 'Optimization', group: 'economy', type: 'item' },

        // Industries (Orange)
        { id: 'Industries', label: 'Industries', group: 'industries', type: 'category' },
        { id: 'Culture_Ind', label: 'Culture', group: 'industries', type: 'item' }, // Disambiguate from other Culture
        { id: 'Automation', label: 'Automation', group: 'industries', type: 'item' },
        { id: 'Productivity', label: 'Productivity', group: 'industries', type: 'item' },
        { id: 'Communication', label: 'Communication', group: 'industries', type: 'item' },
        { id: 'Social', label: 'Social', group: 'industries', type: 'item' },

        // Leisure (Green/Teal)
        { id: 'Leisure', label: 'Leisure', group: 'leisure', type: 'category' },
        { id: 'Nintendo Switch', label: 'Nintendo\nSwitch', group: 'leisure', type: 'item' },
        { id: 'Specialty Coffee', label: 'Specialty\nCoffee', group: 'leisure', type: 'item' },
        { id: 'NYC Places', label: 'NYC Places', group: 'leisure', type: 'item' },
        { id: 'Photography', label: 'Photography', group: 'leisure', type: 'item' },
        { id: 'Leica', label: 'Leica', group: 'leisure', type: 'item' },
        { id: 'Pop Culture', label: 'Pop Culture', group: 'leisure', type: 'item' },
        { id: 'London Places', label: 'London\nPlaces', group: 'leisure', type: 'item' },

        // Geopolitics (Red)
        { id: 'Geopolitics', label: 'Geopolitics', group: 'geopolitics', type: 'category' },
        { id: 'Politics', label: 'Politics', group: 'geopolitics', type: 'item' },
        { id: 'Media', label: 'Media', group: 'geopolitics', type: 'item' },
        { id: 'G2C', label: 'G2C', group: 'geopolitics', type: 'item' },
        { id: 'Military', label: 'Military', group: 'geopolitics', type: 'item' },
        { id: 'Ukraine', label: 'Ukraine', group: 'geopolitics', type: 'item' },

        // Porsche (Light Green)
        { id: 'Porsche', label: 'Porsche', group: 'porsche', type: 'category' },
        { id: 'Porsche 911', label: 'Porsche 911', group: 'porsche', type: 'item' },
        { id: 'Engine Patents', label: 'Engine\nPatents', group: 'porsche', type: 'item' },

        // Tech (Purple)
        { id: 'Tech', label: 'Tech', group: 'tech', type: 'category' },
        { id: 'Artificial Intelligence', label: 'Artificial\nIntelligence', group: 'tech', type: 'item' },
        { id: 'Typography', label: 'Typography', group: 'tech', type: 'item' },
        { id: 'Tech Predictions', label: 'Tech\nPredictions', group: 'tech', type: 'item' },
        { id: 'VC Startups', label: 'VC Startups', group: 'tech', type: 'item' }, // Shared with design? Image shows line from Tech? No, line from Design? Let's check image carefully.
        // Image: VC Startups is connected to Design mostly, but looks close to Tech.
        // Let's attach to Design based on color (Pink).
        
        // Design (Pink)
        { id: 'Design', label: 'Design', group: 'design', type: 'category' },
        { id: 'Creative Tools', label: 'Creative\nTools', group: 'design', type: 'item' },
        // VC Startups is purple dot? No, it's pink dot in image.
        // Wait, "VC Startups" dot is purple-ish in image? 
        // Tech is Purple. "VC Startups" dot is Purple. Lines go to Tech node maybe?
        // Actually, looking at image: 
        // "VC Startups" is connected to "Design" node via pink line. But dot is purple? 
        // Or maybe it's connected to Tech?
        // Let's assume connected to Design for now based on proximity.
        // Re-evaluating image: "VC Startups" is connected to "Design" (Pink line).
        { id: 'VC Startups_Item', label: 'VC Startups', group: 'design', type: 'item' }, // Naming ID distinct
        { id: 'Personal Websites', label: 'Personal\nWebsites', group: 'design', type: 'item' },
        { id: 'UI Design', label: 'UI Design', group: 'design', type: 'item' },
        { id: 'Game Design', label: 'Game Design', group: 'design', type: 'item' },
        { id: 'Fashion', label: 'Fashion', group: 'design', type: 'item' },

        // Culture (Teal)
        { id: 'Culture', label: 'Culture', group: 'culture', type: 'category' },
        { id: 'Jack White', label: 'Jack White', group: 'culture', type: 'item' },
        { id: 'Theatre', label: 'Theatre', group: 'culture', type: 'item' },
        { id: 'Comedy', label: 'Comedy', group: 'culture', type: 'item' },
        { id: 'Movies', label: 'Movies', group: 'culture', type: 'item' },
        { id: 'TV Shows', label: 'TV Shows', group: 'culture', type: 'item' },
        { id: 'Tennis', label: 'Tennis', group: 'culture', type: 'item' },
        { id: 'ATP Top 20', label: 'ATP Top 20', group: 'culture', type: 'item' },
        { id: 'Rackets Technology', label: 'Rackets\nTechnology', group: 'culture', type: 'item' },
        { id: 'WTA Ukraine', label: 'WTA Ukraine', group: 'culture', type: 'item' },
    ],
    links: [
        // Root connections
        { source: 'root', target: 'Economy' },
        { source: 'root', target: 'Industries' },
        { source: 'root', target: 'Leisure' },
        { source: 'root', target: 'Geopolitics' },
        { source: 'root', target: 'Porsche' },
        { source: 'root', target: 'Tech' },
        { source: 'root', target: 'Design' },
        { source: 'root', target: 'Culture' },

        // Economy
        { source: 'Economy', target: 'Stock Market' },
        { source: 'Economy', target: 'UK Economy' },
        { source: 'Economy', target: 'Optimization' },

        // Industries
        { source: 'Industries', target: 'Culture_Ind' },
        { source: 'Industries', target: 'Automation' },
        { source: 'Industries', target: 'Productivity' },
        { source: 'Industries', target: 'Communication' },
        { source: 'Industries', target: 'Social' },

        // Leisure
        { source: 'Leisure', target: 'Nintendo Switch' },
        { source: 'Leisure', target: 'Specialty Coffee' },
        { source: 'Leisure', target: 'NYC Places' },
        { source: 'Leisure', target: 'Photography' },
        // Photography sub-links
        { source: 'Photography', target: 'Leica' }, 
        
        { source: 'Leisure', target: 'Pop Culture' },
        { source: 'Leisure', target: 'London Places' },

        // Geopolitics
        { source: 'Geopolitics', target: 'Politics' },
        { source: 'Geopolitics', target: 'Media' },
        { source: 'Geopolitics', target: 'G2C' },
        { source: 'Geopolitics', target: 'Military' },
        { source: 'Geopolitics', target: 'Ukraine' },

        // Porsche
        { source: 'Porsche', target: 'Porsche 911' },
        { source: 'Porsche', target: 'Engine Patents' },

        // Tech
        { source: 'Tech', target: 'Artificial Intelligence' },
        { source: 'Tech', target: 'Typography' },
        { source: 'Tech', target: 'Tech Predictions' },

        // Design
        { source: 'Design', target: 'VC Startups_Item' },
        { source: 'Design', target: 'Personal Websites' },
        { source: 'Design', target: 'UI Design' },
        { source: 'Design', target: 'Game Design' },
        { source: 'Design', target: 'Fashion' },
        { source: 'Design', target: 'Creative Tools' },

        // Culture (Teal)
        { source: 'Culture', target: 'Jack White' },
        { source: 'Culture', target: 'Theatre' },
        { source: 'Culture', target: 'Comedy' },
        { source: 'Culture', target: 'Movies' },
        { source: 'Culture', target: 'TV Shows' },
        { source: 'Culture', target: 'Tennis' },
        // Tennis sub-links or direct?
        // Image: Tennis -> ATP Top 20, RacketsTech, WTA Ukraine ?
        // Or all from Culture?
        // Looks like: Culture -> Tennis
        // And Tennis -> ATP Top 20
        // Tennis -> WTA Ukraine
        // Tennis -> Rackets Technology
        // Let's refine based on visual tree structure.
        { source: 'Tennis', target: 'ATP Top 20' },
        { source: 'Tennis', target: 'Rackets Technology' },
        { source: 'Tennis', target: 'WTA Ukraine' },
        
    ]
};

export const CATEGORY_COLORS: Record<string, string> = {
    economy: '#4f8aff', // Blue
    industries: '#ff9f4f', // Orange
    leisure: '#4ebd94', // Green
    geopolitics: '#ff5c5c', // Red
    porsche: '#9acd32', // Light Green
    tech: '#a855f7', // Purple
    design: '#ff69b4', // Pink
    culture: '#20b2aa', // Teal
    root: '#ffffff'
};
