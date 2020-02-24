"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
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
            companiesAndISPs: {
                today: {
                    lastVisitorName: 'Verizon Communications',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/27/2019',
                    lastVisitorTime: '10:58:16 pm',
                    lastVisitorMail: 'zach@smartersorting.com',
                    lastVisitorTimeInMostRecentPeople: '10:57:05 pm',
                    totalVisits: '2906',
                    visitedMultiplePages: '979',
                    convertedVisits: '5',
                    allRecentPeople: '43',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    visitsPerDay: '2 906',
                    numberOfHits: '242'
                },
                yesterday: {
                    lastVisitorName: 'Psinet',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/26/2019',
                    lastVisitorTime: '11:59:36 pm',
                    lastVisitorMail: 'deepak.kumar@adaptiva.com',
                    lastVisitorTimeInMostRecentPeople: '11:45:07 pm',
                    totalVisits: '1927',
                    visitedMultiplePages: '705',
                    convertedVisits: '2',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    visitsPerDay: '1 927',
                    numberOfHits: '154'
                },
                last7Days: {
                    lastVisitorName: 'Verizon Communications',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/27/2019',
                    lastVisitorTime: '10:58:16 pm',
                    lastVisitorMail: 'zach@smartersorting.com',
                    lastVisitorTimeInMostRecentPeople: '10:57:05 pm',
                    totalVisits: '13058',
                    visitedMultiplePages: '4436',
                    convertedVisits: '21',
                    allRecentPeople: '207',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    visitsPerDay: '2 906',
                    numberOfHits: '1 231'
                },
                last30Days: {
                    lastVisitorName: 'Verizon Communications',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/27/2019',
                    lastVisitorTime: '10:58:16 pm',
                    lastVisitorMail: 'zach@smartersorting.com',
                    lastVisitorTimeInMostRecentPeople: '10:57:05 pm',
                    totalVisits: '43492',
                    visitedMultiplePages: '14000',
                    convertedVisits: '75',
                    allRecentPeople: '579',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    visitsPerDay: '2 906',
                    numberOfHits: '3 999'
                },
                visitorMail: 'zach@smartersorting.com'
            }
        }
    }
};
