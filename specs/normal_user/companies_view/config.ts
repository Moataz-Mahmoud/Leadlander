import { Config, browser } from "protractor"

export let config: Config = {
    framework: "jasmine",

    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: ["--start-maximized"]
        }
    },

    specs: ['dashboardTest.js'],

    seleniumAddress: 'http://localhost:4444/wd/hub',

    params: {
        login: {
            normal: {
                username: 'moatazmasters@gmail.com',
                password: 'Test123*'
            }
        },
        dashboard: {
            companies: {
                today: {
                    lastVisitorName: 'Broadnet Connect',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/27/2019',
                    lastVisitorTime: '10:57:05 pm',
                    lastVisitorMail: 'zach@smartersorting.com',
                    lastVisitorTimeInMostRecentPeople: '10:57:05 pm',
                    totalVisits: '954',
                    visitedMultiplePages: '351',
                    convertedVisits: '5',
                    allRecentPeople: '43',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    visitsPerDay: '954',
                    numberOfHits: '140',
                },
                yesterday: {
                    lastVisitorName: 'Evalueserve',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/26/2019',
                    lastVisitorTime: '11:57:14 pm',
                    lastVisitorMail: 'deepak.kumar@adaptiva.com',
                    lastVisitorTimeInMostRecentPeople: '11:45:07 pm',
                    totalVisits: '630',
                    visitedMultiplePages: '253',
                    convertedVisits: '2',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    visitsPerDay: '630',
                    numberOfHits: '34',
                },
                last7Days: {
                    lastVisitorName: 'Broadnet Connect',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/27/2019',
                    lastVisitorTime: '10:57:05 pm',
                    lastVisitorMail: 'zach@smartersorting.com',
                    lastVisitorTimeInMostRecentPeople: '10:57:05 pm',
                    totalVisits: '3979',
                    visitedMultiplePages: '1527',
                    convertedVisits: '21',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    numberOfHits: '422'
                },
                last30Days: {
                    lastVisitorName: 'Broadnet Connect',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/27/2019',
                    lastVisitorTime: '10:57:05 pm',
                    lastVisitorMail: 'zach@smartersorting.com',
                    lastVisitorTimeInMostRecentPeople: '10:57:05 pm',
                    totalVisits: '12444',
                    visitedMultiplePages: '4567',
                    convertedVisits: '74',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    numberOfHits: '1 161'
                },
                visitorMail: 'zach@smartersorting.com'
            }
        }
    }
}