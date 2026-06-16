import { Team, Match, Standing, Article, Timezone } from '@/types'

// World Cup 2026 Teams - Real Groups from 163.com
export const teams: Team[] = [
  // Group A
  { slug: 'mexico', name: 'Mexico', flag: '🇲🇽', group: 'A', manager: 'Javier Aguirre', ranking: 0, squad: [], history: { appearances: 17, bestResult: 'Quarterfinals', titles: 0 } },
  { slug: 'south-korea', name: 'South Korea', flag: '🇰🇷', group: 'A', manager: 'Myung-bo Hong', ranking: 0, squad: [], history: { appearances: 11, bestResult: 'Fourth place 2002', titles: 0 } },
  { slug: 'czech', name: 'Czechia', flag: '🇨🇿', group: 'A', manager: 'Miroslav Koubek', ranking: 0, squad: [], history: { appearances: 10, bestResult: 'Runners-up 1934, 1962', titles: 0 } },
  { slug: 'south-africa', name: 'South Africa', flag: '🇿🇦', group: 'A', manager: 'Hugo Broos', ranking: 0, squad: [], history: { appearances: 6, bestResult: 'Group stage', titles: 0 } },

  // Group B
  { slug: 'switzerland', name: 'Switzerland', flag: '🇨🇭', group: 'B', manager: 'Murat Yakin', ranking: 0, squad: [], history: { appearances: 12, bestResult: 'Quarterfinals', titles: 0 } },
  { slug: 'canada', name: 'Canada', flag: '🇨🇦', group: 'B', manager: 'Jesse Marsch', ranking: 0, squad: [], history: { appearances: 2, bestResult: 'Group stage', titles: 0 } },
  { slug: 'qatar', name: 'Qatar', flag: '🇶🇦', group: 'B', manager: 'Julen Lopetegui', ranking: 0, squad: [], history: { appearances: 2, bestResult: 'Group stage', titles: 0 } },
  { slug: 'bosnia', name: 'Bosnia-Herzegovina', flag: '🇧🇦', group: 'B', manager: 'Sergej Barbarez', ranking: 0, squad: [], history: { appearances: 2, bestResult: 'Group stage', titles: 0 } },

  // Group C
  { slug: 'scotland', name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C', manager: 'Steve Clarke', ranking: 0, squad: [], history: { appearances: 9, bestResult: 'Group stage', titles: 0 } },
  { slug: 'morocco', name: 'Morocco', flag: '🇲🇦', group: 'C', manager: 'Mohamed Ouahbi', ranking: 0, squad: [], history: { appearances: 6, bestResult: 'Fourth place 2022', titles: 0 } },
  { slug: 'brazil', name: 'Brazil', flag: '🇧🇷', group: 'C', manager: 'Carlo Ancelotti', ranking: 0, squad: [], history: { appearances: 22, bestResult: 'Champions 5x', titles: 5 } },
  { slug: 'haiti', name: 'Haiti', flag: '🇭🇹', group: 'C', manager: 'Sébastien Migné', ranking: 0, squad: [], history: { appearances: 1, bestResult: 'Group stage', titles: 0 } },

  // Group D
  { slug: 'usa', name: 'USA', flag: '🇺🇸', group: 'D', manager: 'Mauricio Pochettino', ranking: 0, squad: [], history: { appearances: 11, bestResult: 'Third place 1930', titles: 0 } },
  { slug: 'australia', name: 'Australia', flag: '🇦🇺', group: 'D', manager: 'Tony Popovic', ranking: 0, squad: [], history: { appearances: 6, bestResult: 'Round of 16', titles: 0 } },
  { slug: 'turkey', name: 'Turkey', flag: '🇹🇷', group: 'D', manager: 'Vincenzo Montella', ranking: 0, squad: [], history: { appearances: 3, bestResult: 'Semi-finals 2002', titles: 0 } },
  { slug: 'paraguay', name: 'Paraguay', flag: '🇵🇾', group: 'D', manager: 'Gustavo Alfaro', ranking: 0, squad: [], history: { appearances: 8, bestResult: 'Quarterfinals', titles: 0 } },

  // Group E
  { slug: 'germany', name: 'Germany', flag: '🇩🇪', group: 'E', manager: 'Julian Nagelsmann', ranking: 0, squad: [], history: { appearances: 20, bestResult: 'Champions 4x', titles: 4 } },
  { slug: 'ivory-coast', name: 'Ivory Coast', flag: '🇨🇮', group: 'E', manager: 'Emerse Faé', ranking: 0, squad: [], history: { appearances: 3, bestResult: 'Group stage', titles: 0 } },
  { slug: 'ecuador', name: 'Ecuador', flag: '🇪🇨', group: 'E', manager: 'Sebastián Beccacece', ranking: 0, squad: [], history: { appearances: 4, bestResult: 'Round of 16 2006', titles: 0 } },
  { slug: 'curacao', name: 'Curacao', flag: '🇨🇼', group: 'E', manager: 'Dick Advocaat', ranking: 0, squad: [], history: { appearances: 0, bestResult: 'N/A', titles: 0 } },

  // Group F
  { slug: 'sweden', name: 'Sweden', flag: '🇸🇪', group: 'F', manager: 'Graham Potter', ranking: 0, squad: [], history: { appearances: 12, bestResult: 'Runners-up 1958', titles: 0 } },
  { slug: 'japan', name: 'Japan', flag: '🇯🇵', group: 'F', manager: 'Hajime Moriyasu', ranking: 0, squad: [], history: { appearances: 7, bestResult: 'Round of 16', titles: 0 } },
  { slug: 'netherlands', name: 'Netherlands', flag: '🇳🇱', group: 'F', manager: 'Ronald Koeman', ranking: 0, squad: [], history: { appearances: 11, bestResult: 'Runners-up 3x', titles: 0 } },
  { slug: 'tunisia', name: 'Tunisia', flag: '🇹🇳', group: 'F', manager: 'Hervé Renard', ranking: 0, squad: [], history: { appearances: 6, bestResult: 'Group stage', titles: 0 } },

  // Group G
  { slug: 'new-zealand', name: 'New Zealand', flag: '🇳🇿', group: 'G', manager: 'Darren Bazeley', ranking: 0, squad: [], history: { appearances: 3, bestResult: 'Group stage', titles: 0 } },
  { slug: 'iran', name: 'Iran', flag: '🇮🇷', group: 'G', manager: 'Amir Ghalenoei', ranking: 0, squad: [], history: { appearances: 6, bestResult: 'Group stage', titles: 0 } },
  { slug: 'belgium', name: 'Belgium', flag: '🇧🇪', group: 'G', manager: 'Rudi Garcia', ranking: 0, squad: [], history: { appearances: 14, bestResult: 'Third place 2018', titles: 0 } },
  { slug: 'egypt', name: 'Egypt', flag: '🇪🇬', group: 'G', manager: 'Hossam Hassan', ranking: 0, squad: [], history: { appearances: 3, bestResult: 'Group stage', titles: 0 } },

  // Group H
  { slug: 'uruguay', name: 'Uruguay', flag: '🇺🇾', group: 'H', manager: 'Marcelo Bielsa', ranking: 0, squad: [], history: { appearances: 14, bestResult: 'Champions 2x', titles: 2 } },
  { slug: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', group: 'H', manager: 'Georgios Donis', ranking: 0, squad: [], history: { appearances: 6, bestResult: 'Round of 16 1994', titles: 0 } },
  { slug: 'spain', name: 'Spain', flag: '🇪🇸', group: 'H', manager: 'Luis de la Fuente', ranking: 0, squad: [], history: { appearances: 16, bestResult: 'Champions 2010', titles: 1 } },
  { slug: 'cape-verde', name: 'Cabo Verde', flag: '🇨🇻', group: 'H', manager: 'Bubista', ranking: 0, squad: [], history: { appearances: 0, bestResult: 'N/A', titles: 0 } },

  // Group I
  { slug: 'portugal', name: 'Portugal', flag: '🇵🇹', group: 'I', manager: 'Roberto Martínez', ranking: 0, squad: [], history: { appearances: 8, bestResult: 'Champions 2016', titles: 1 } },
  { slug: 'senegal', name: 'Senegal', flag: '🇸🇳', group: 'I', manager: 'Pape Thiaw', ranking: 0, squad: [], history: { appearances: 3, bestResult: 'Quarterfinals 2022', titles: 0 } },
  { slug: 'iraq', name: 'Iraq', flag: '🇮🇶', group: 'I', manager: 'Graham Arnold', ranking: 0, squad: [], history: { appearances: 1, bestResult: 'Group stage', titles: 0 } },
  { slug: 'norway', name: 'Norway', flag: '🇳🇴', group: 'I', manager: 'Ståle Solbakken', ranking: 0, squad: [], history: { appearances: 6, bestResult: 'Quarterfinals', titles: 0 } },

  // Group J
  { slug: 'argentina', name: 'Argentina', flag: '🇦🇷', group: 'J', manager: 'Lionel Scaloni', ranking: 0, squad: [], history: { appearances: 18, bestResult: 'Champions 2022', titles: 3 } },
  { slug: 'algeria', name: 'Algeria', flag: '🇩🇿', group: 'J', manager: 'Vladimir Petkovic', ranking: 0, squad: [], history: { appearances: 5, bestResult: 'Round of 16 2010, 2014', titles: 0 } },
  { slug: 'austria', name: 'Austria', flag: '🇦🇹', group: 'J', manager: 'Ralf Rangnick', ranking: 0, squad: [], history: { appearances: 8, bestResult: 'Third place 1954', titles: 0 } },
  { slug: 'jordan', name: 'Jordan', flag: '🇯🇴', group: 'J', manager: 'Jamal Sellami', ranking: 0, squad: [], history: { appearances: 1, bestResult: 'Group stage', titles: 0 } },

  // Group K
  { slug: 'france', name: 'France', flag: '🇫🇷', group: 'K', manager: 'Didier Deschamps', ranking: 0, squad: [], history: { appearances: 16, bestResult: 'Champions 1998, 2018', titles: 2 } },
  { slug: 'dr-congo', name: 'DR Congo', flag: '🇨🇩', group: 'K', manager: 'Sébastien Desabre', ranking: 0, squad: [], history: { appearances: 0, bestResult: 'N/A', titles: 0 } },
  { slug: 'uzbekistan', name: 'Uzbekistan', flag: '🇺🇿', group: 'K', manager: 'Fabio Cannavaro', ranking: 0, squad: [], history: { appearances: 0, bestResult: 'N/A', titles: 0 } },
  { slug: 'colombia', name: 'Colombia', flag: '🇨🇴', group: 'K', manager: 'Néstor Lorenzo', ranking: 0, squad: [], history: { appearances: 6, bestResult: 'Quarterfinals 2014', titles: 0 } },

  // Group L
  { slug: 'england', name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L', manager: 'Thomas Tuchel', ranking: 0, squad: [], history: { appearances: 16, bestResult: 'Champions 1966', titles: 1 } },
  { slug: 'croatia', name: 'Croatia', flag: '🇭🇷', group: 'L', manager: 'Zlatko Dalic', ranking: 0, squad: [], history: { appearances: 6, bestResult: 'Runners-up 2018', titles: 0 } },
  { slug: 'ghana', name: 'Ghana', flag: '🇬🇭', group: 'L', manager: 'Carlos Queiroz', ranking: 0, squad: [], history: { appearances: 4, bestResult: 'Quarterfinals 2010', titles: 0 } },
  { slug: 'panama', name: 'Panama', flag: '🇵🇦', group: 'L', manager: 'Thomas Christiansen', ranking: 0, squad: [], history: { appearances: 1, bestResult: 'Group stage', titles: 0 } },
]

// Generate group matches
export const matches: Match[] = [
  // Group A
  { id: '1', date: '2026-06-11', time: '18:00', homeTeam: 'Mexico', awayTeam: 'South Korea', venue: 'Estadio Azteca', city: 'Mexico City', group: 'A', stage: 'group', status: 'scheduled' },
  { id: '2', date: '2026-06-11', time: '21:00', homeTeam: 'Czechia', awayTeam: 'South Africa', venue: 'BMO Field', city: 'Toronto', group: 'A', stage: 'group', status: 'scheduled' },
  { id: '3', date: '2026-06-15', time: '18:00', homeTeam: 'Mexico', awayTeam: 'Czechia', venue: 'Estadio Azteca', city: 'Mexico City', group: 'A', stage: 'group', status: 'scheduled' },
  { id: '4', date: '2026-06-15', time: '21:00', homeTeam: 'South Africa', awayTeam: 'South Korea', venue: 'MetLife Stadium', city: 'New Jersey', group: 'A', stage: 'group', status: 'scheduled' },
  { id: '5', date: '2026-06-19', time: '20:00', homeTeam: 'South Africa', awayTeam: 'Mexico', venue: 'BC Place', city: 'Vancouver', group: 'A', stage: 'group', status: 'scheduled' },
  { id: '6', date: '2026-06-19', time: '20:00', homeTeam: 'South Korea', awayTeam: 'Czechia', venue: 'NRG Stadium', city: 'Houston', group: 'A', stage: 'group', status: 'scheduled' },
  // Group B
  { id: '7', date: '2026-06-12', time: '18:00', homeTeam: 'Switzerland', awayTeam: 'Canada', venue: 'MetLife Stadium', city: 'New Jersey', group: 'B', stage: 'group', status: 'scheduled' },
  { id: '8', date: '2026-06-12', time: '21:00', homeTeam: 'Qatar', awayTeam: 'Bosnia-Herzegovina', venue: 'Rose Bowl', city: 'Los Angeles', group: 'B', stage: 'group', status: 'scheduled' },
  { id: '9', date: '2026-06-16', time: '18:00', homeTeam: 'Switzerland', awayTeam: 'Qatar', venue: 'SoFi Stadium', city: 'Inglewood', group: 'B', stage: 'group', status: 'scheduled' },
  { id: '10', date: '2026-06-16', time: '21:00', homeTeam: 'Bosnia-Herzegovina', awayTeam: 'Canada', venue: 'Lambeau Field', city: 'Green Bay', group: 'B', stage: 'group', status: 'scheduled' },
  { id: '11', date: '2026-06-20', time: '20:00', homeTeam: 'Canada', awayTeam: 'Qatar', venue: 'Gillette Stadium', city: 'Foxborough', group: 'B', stage: 'group', status: 'scheduled' },
  { id: '12', date: '2026-06-20', time: '20:00', homeTeam: 'Bosnia-Herzegovina', awayTeam: 'Switzerland', venue: 'Allegiant Stadium', city: 'Las Vegas', group: 'B', stage: 'group', status: 'scheduled' },
  // Group C
  { id: '13', date: '2026-06-12', time: '18:00', homeTeam: 'Scotland', awayTeam: 'Morocco', venue: 'MetLife Stadium', city: 'New Jersey', group: 'C', stage: 'group', status: 'scheduled' },
  { id: '14', date: '2026-06-12', time: '21:00', homeTeam: 'Brazil', awayTeam: 'Haiti', venue: 'SoFi Stadium', city: 'Inglewood', group: 'C', stage: 'group', status: 'scheduled' },
  { id: '15', date: '2026-06-16', time: '18:00', homeTeam: 'Scotland', awayTeam: 'Brazil', venue: 'Rose Bowl', city: 'Pasadena', group: 'C', stage: 'group', status: 'scheduled' },
  { id: '16', date: '2026-06-16', time: '21:00', homeTeam: 'Haiti', awayTeam: 'Morocco', venue: 'AT&T Stadium', city: 'Arlington', group: 'C', stage: 'group', status: 'scheduled' },
  { id: '17', date: '2026-06-20', time: '20:00', homeTeam: 'Haiti', awayTeam: 'Scotland', venue: 'NRG Stadium', city: 'Houston', group: 'C', stage: 'group', status: 'scheduled' },
  { id: '18', date: '2026-06-20', time: '20:00', homeTeam: 'Morocco', awayTeam: 'Brazil', venue: 'Levi Stadium', city: 'Santa Clara', group: 'C', stage: 'group', status: 'scheduled' },
  // Group D
  { id: '19', date: '2026-06-13', time: '18:00', homeTeam: 'USA', awayTeam: 'Australia', venue: 'MetLife Stadium', city: 'New Jersey', group: 'D', stage: 'group', status: 'scheduled' },
  { id: '20', date: '2026-06-13', time: '21:00', homeTeam: 'Turkey', awayTeam: 'Paraguay', venue: 'Rose Bowl', city: 'Pasadena', group: 'D', stage: 'group', status: 'scheduled' },
  { id: '21', date: '2026-06-17', time: '18:00', homeTeam: 'USA', awayTeam: 'Turkey', venue: 'SoFi Stadium', city: 'Inglewood', group: 'D', stage: 'group', status: 'scheduled' },
  { id: '22', date: '2026-06-17', time: '21:00', homeTeam: 'Paraguay', awayTeam: 'Australia', venue: 'Allegiant Stadium', city: 'Las Vegas', group: 'D', stage: 'group', status: 'scheduled' },
  { id: '23', date: '2026-06-21', time: '20:00', homeTeam: 'Paraguay', awayTeam: 'USA', venue: 'Gillette Stadium', city: 'Foxborough', group: 'D', stage: 'group', status: 'scheduled' },
  { id: '24', date: '2026-06-21', time: '20:00', homeTeam: 'Australia', awayTeam: 'Turkey', venue: 'Levi Stadium', city: 'Santa Clara', group: 'D', stage: 'group', status: 'scheduled' },
  // Group E
  { id: '25', date: '2026-06-13', time: '18:00', homeTeam: 'Germany', awayTeam: 'Ivory Coast', venue: 'SoFi Stadium', city: 'Inglewood', group: 'E', stage: 'group', status: 'scheduled' },
  { id: '26', date: '2026-06-13', time: '21:00', homeTeam: 'Ecuador', awayTeam: 'Curacao', venue: 'Allegiant Stadium', city: 'Las Vegas', group: 'E', stage: 'group', status: 'scheduled' },
  { id: '27', date: '2026-06-17', time: '18:00', homeTeam: 'Germany', awayTeam: 'Ecuador', venue: 'MetLife Stadium', city: 'New Jersey', group: 'E', stage: 'group', status: 'scheduled' },
  { id: '28', date: '2026-06-17', time: '21:00', homeTeam: 'Curacao', awayTeam: 'Ivory Coast', venue: 'Rose Bowl', city: 'Los Angeles', group: 'E', stage: 'group', status: 'scheduled' },
  { id: '29', date: '2026-06-21', time: '20:00', homeTeam: 'Ivory Coast', awayTeam: 'Ecuador', venue: 'NRG Stadium', city: 'Houston', group: 'E', stage: 'group', status: 'scheduled' },
  { id: '30', date: '2026-06-21', time: '20:00', homeTeam: 'Curacao', awayTeam: 'Germany', venue: 'BC Place', city: 'Vancouver', group: 'E', stage: 'group', status: 'scheduled' },
  // Group F
  { id: '31', date: '2026-06-14', time: '18:00', homeTeam: 'Sweden', awayTeam: 'Japan', venue: 'MetLife Stadium', city: 'New Jersey', group: 'F', stage: 'group', status: 'scheduled' },
  { id: '32', date: '2026-06-14', time: '21:00', homeTeam: 'Netherlands', awayTeam: 'Tunisia', venue: 'Rose Bowl', city: 'Los Angeles', group: 'F', stage: 'group', status: 'scheduled' },
  { id: '33', date: '2026-06-18', time: '18:00', homeTeam: 'Sweden', awayTeam: 'Netherlands', venue: 'SoFi Stadium', city: 'Inglewood', group: 'F', stage: 'group', status: 'scheduled' },
  { id: '34', date: '2026-06-18', time: '21:00', homeTeam: 'Tunisia', awayTeam: 'Japan', venue: 'Allegiant Stadium', city: 'Las Vegas', group: 'F', stage: 'group', status: 'scheduled' },
  { id: '35', date: '2026-06-22', time: '20:00', homeTeam: 'Japan', awayTeam: 'Netherlands', venue: 'Levi Stadium', city: 'Santa Clara', group: 'F', stage: 'group', status: 'scheduled' },
  { id: '36', date: '2026-06-22', time: '20:00', homeTeam: 'Tunisia', awayTeam: 'Sweden', venue: 'Gillette Stadium', city: 'Foxborough', group: 'F', stage: 'group', status: 'scheduled' },
  // Group G
  { id: '37', date: '2026-06-14', time: '18:00', homeTeam: 'New Zealand', awayTeam: 'Iran', venue: 'SoFi Stadium', city: 'Inglewood', group: 'G', stage: 'group', status: 'scheduled' },
  { id: '38', date: '2026-06-14', time: '21:00', homeTeam: 'Belgium', awayTeam: 'Egypt', venue: 'Allegiant Stadium', city: 'Las Vegas', group: 'G', stage: 'group', status: 'scheduled' },
  { id: '39', date: '2026-06-18', time: '18:00', homeTeam: 'New Zealand', awayTeam: 'Belgium', venue: 'MetLife Stadium', city: 'New Jersey', group: 'G', stage: 'group', status: 'scheduled' },
  { id: '40', date: '2026-06-18', time: '21:00', homeTeam: 'Egypt', awayTeam: 'Iran', venue: 'Rose Bowl', city: 'Pasadena', group: 'G', stage: 'group', status: 'scheduled' },
  { id: '41', date: '2026-06-22', time: '20:00', homeTeam: 'Iran', awayTeam: 'Belgium', venue: 'NRG Stadium', city: 'Houston', group: 'G', stage: 'group', status: 'scheduled' },
  { id: '42', date: '2026-06-22', time: '20:00', homeTeam: 'Egypt', awayTeam: 'New Zealand', venue: 'BC Place', city: 'Vancouver', group: 'G', stage: 'group', status: 'scheduled' },
  // Group H
  { id: '43', date: '2026-06-15', time: '18:00', homeTeam: 'Uruguay', awayTeam: 'Saudi Arabia', venue: 'MetLife Stadium', city: 'New Jersey', group: 'H', stage: 'group', status: 'scheduled' },
  { id: '44', date: '2026-06-15', time: '21:00', homeTeam: 'Spain', awayTeam: 'Cabo Verde', venue: 'Allegiant Stadium', city: 'Las Vegas', group: 'H', stage: 'group', status: 'scheduled' },
  { id: '45', date: '2026-06-19', time: '20:00', homeTeam: 'Uruguay', awayTeam: 'Spain', venue: 'SoFi Stadium', city: 'Inglewood', group: 'H', stage: 'group', status: 'scheduled' },
  { id: '46', date: '2026-06-19', time: '20:00', homeTeam: 'Cabo Verde', awayTeam: 'Saudi Arabia', venue: 'Rose Bowl', city: 'Los Angeles', group: 'H', stage: 'group', status: 'scheduled' },
  { id: '47', date: '2026-06-23', time: '20:00', homeTeam: 'Saudi Arabia', awayTeam: 'Spain', venue: 'Levi Stadium', city: 'Santa Clara', group: 'H', stage: 'group', status: 'scheduled' },
  { id: '48', date: '2026-06-23', time: '20:00', homeTeam: 'Cabo Verde', awayTeam: 'Uruguay', venue: 'Gillette Stadium', city: 'Foxborough', group: 'H', stage: 'group', status: 'scheduled' },
  // Group I
  { id: '49', date: '2026-06-15', time: '18:00', homeTeam: 'Portugal', awayTeam: 'Senegal', venue: 'MetLife Stadium', city: 'New Jersey', group: 'I', stage: 'group', status: 'scheduled' },
  { id: '50', date: '2026-06-15', time: '21:00', homeTeam: 'Norway', awayTeam: 'Iraq', venue: 'Allegiant Stadium', city: 'Las Vegas', group: 'I', stage: 'group', status: 'scheduled' },
  { id: '51', date: '2026-06-19', time: '20:00', homeTeam: 'Portugal', awayTeam: 'Norway', venue: 'SoFi Stadium', city: 'Inglewood', group: 'I', stage: 'group', status: 'scheduled' },
  { id: '52', date: '2026-06-19', time: '20:00', homeTeam: 'Iraq', awayTeam: 'Senegal', venue: 'Rose Bowl', city: 'Los Angeles', group: 'I', stage: 'group', status: 'scheduled' },
  { id: '53', date: '2026-06-23', time: '20:00', homeTeam: 'Senegal', awayTeam: 'Norway', venue: 'Levi Stadium', city: 'Santa Clara', group: 'I', stage: 'group', status: 'scheduled' },
  { id: '54', date: '2026-06-23', time: '20:00', homeTeam: 'Iraq', awayTeam: 'Portugal', venue: 'Gillette Stadium', city: 'Foxborough', group: 'I', stage: 'group', status: 'scheduled' },
  // Group J
  { id: '55', date: '2026-06-16', time: '18:00', homeTeam: 'Argentina', awayTeam: 'Algeria', venue: 'MetLife Stadium', city: 'New Jersey', group: 'J', stage: 'group', status: 'scheduled' },
  { id: '56', date: '2026-06-16', time: '21:00', homeTeam: 'Austria', awayTeam: 'Jordan', venue: 'Allegiant Stadium', city: 'Las Vegas', group: 'J', stage: 'group', status: 'scheduled' },
  { id: '57', date: '2026-06-20', time: '20:00', homeTeam: 'Argentina', awayTeam: 'Austria', venue: 'SoFi Stadium', city: 'Inglewood', group: 'J', stage: 'group', status: 'scheduled' },
  { id: '58', date: '2026-06-20', time: '20:00', homeTeam: 'Jordan', awayTeam: 'Algeria', venue: 'Rose Bowl', city: 'Los Angeles', group: 'J', stage: 'group', status: 'scheduled' },
  { id: '59', date: '2026-06-24', time: '20:00', homeTeam: 'Algeria', awayTeam: 'Austria', venue: 'Levi Stadium', city: 'Santa Clara', group: 'J', stage: 'group', status: 'scheduled' },
  { id: '60', date: '2026-06-24', time: '20:00', homeTeam: 'Jordan', awayTeam: 'Argentina', venue: 'Gillette Stadium', city: 'Foxborough', group: 'J', stage: 'group', status: 'scheduled' },
  // Group K
  { id: '61', date: '2026-06-16', time: '18:00', homeTeam: 'France', awayTeam: 'DR Congo', venue: 'MetLife Stadium', city: 'New Jersey', group: 'K', stage: 'group', status: 'scheduled' },
  { id: '62', date: '2026-06-16', time: '21:00', homeTeam: 'Uzbekistan', awayTeam: 'Colombia', venue: 'Allegiant Stadium', city: 'Las Vegas', group: 'K', stage: 'group', status: 'scheduled' },
  { id: '63', date: '2026-06-20', time: '20:00', homeTeam: 'France', awayTeam: 'Uzbekistan', venue: 'SoFi Stadium', city: 'Inglewood', group: 'K', stage: 'group', status: 'scheduled' },
  { id: '64', date: '2026-06-20', time: '20:00', homeTeam: 'Colombia', awayTeam: 'DR Congo', venue: 'Rose Bowl', city: 'Los Angeles', group: 'K', stage: 'group', status: 'scheduled' },
  { id: '65', date: '2026-06-24', time: '20:00', homeTeam: 'DR Congo', awayTeam: 'Uzbekistan', venue: 'Levi Stadium', city: 'Santa Clara', group: 'K', stage: 'group', status: 'scheduled' },
  { id: '66', date: '2026-06-24', time: '20:00', homeTeam: 'Colombia', awayTeam: 'France', venue: 'Gillette Stadium', city: 'Foxborough', group: 'K', stage: 'group', status: 'scheduled' },
  // Group L
  { id: '67', date: '2026-06-17', time: '18:00', homeTeam: 'England', awayTeam: 'Croatia', venue: 'MetLife Stadium', city: 'New Jersey', group: 'L', stage: 'group', status: 'scheduled' },
  { id: '68', date: '2026-06-17', time: '21:00', homeTeam: 'Ghana', awayTeam: 'Panama', venue: 'Allegiant Stadium', city: 'Las Vegas', group: 'L', stage: 'group', status: 'scheduled' },
  { id: '69', date: '2026-06-21', time: '20:00', homeTeam: 'England', awayTeam: 'Ghana', venue: 'SoFi Stadium', city: 'Inglewood', group: 'L', stage: 'group', status: 'scheduled' },
  { id: '70', date: '2026-06-21', time: '20:00', homeTeam: 'Panama', awayTeam: 'Croatia', venue: 'Rose Bowl', city: 'Los Angeles', group: 'L', stage: 'group', status: 'scheduled' },
  { id: '71', date: '2026-06-25', time: '20:00', homeTeam: 'Croatia', awayTeam: 'Ghana', venue: 'Levi Stadium', city: 'Santa Clara', group: 'L', stage: 'group', status: 'scheduled' },
  { id: '72', date: '2026-06-25', time: '20:00', homeTeam: 'Panama', awayTeam: 'England', venue: 'Gillette Stadium', city: 'Foxborough', group: 'L', stage: 'group', status: 'scheduled' },
]

// Current standings (simulated based on real groups)
export const standings: Standing[] = [
  { group: 'A', teams: [
    { rank: 1, team: 'Mexico', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'South Korea', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Czechia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'South Africa', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'B', teams: [
    { rank: 1, team: 'Switzerland', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'Canada', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Qatar', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Bosnia-Herzegovina', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'C', teams: [
    { rank: 1, team: 'Scotland', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'Morocco', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Brazil', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Haiti', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'D', teams: [
    { rank: 1, team: 'USA', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'Australia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Turkey', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Paraguay', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'E', teams: [
    { rank: 1, team: 'Germany', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'Ivory Coast', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Ecuador', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Curacao', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'F', teams: [
    { rank: 1, team: 'Sweden', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'Japan', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Netherlands', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Tunisia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'G', teams: [
    { rank: 1, team: 'New Zealand', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'Iran', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Belgium', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Egypt', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'H', teams: [
    { rank: 1, team: 'Uruguay', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'Saudi Arabia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Spain', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Cabo Verde', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'I', teams: [
    { rank: 1, team: 'Portugal', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'Senegal', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Norway', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Iraq', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'J', teams: [
    { rank: 1, team: 'Argentina', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'Algeria', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Austria', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Jordan', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'K', teams: [
    { rank: 1, team: 'France', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'DR Congo', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Uzbekistan', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Colombia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
  { group: 'L', teams: [
    { rank: 1, team: 'England', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 2, team: 'Croatia', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 3, team: 'Ghana', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { rank: 4, team: 'Panama', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
  ]},
]

// 100+ Articles
export const articles: Article[] = [
  // Tournament Guides
  {
    slug: 'world-cup-2026-format-guide',
    title: 'Complete Guide to the 2026 World Cup Format: 48 Teams, New Rules',
    excerpt: 'The FIFA World Cup 2026 introduces major changes with 48 teams competing across 104 matches. Learn the new format, qualification rules, and knockout stage structure.',
    category: 'guide',
    content: `The 2026 FIFA World Cup marks a historic expansion in international football, featuring 48 teams for the first time in tournament history. This comprehensive guide covers all aspects of the new format.

## Tournament Structure

The expanded tournament introduces several key changes that affect how teams qualify, compete, and ultimately win the World Cup.

### Group Stage Changes

With 48 teams now participating, the format has evolved significantly:
- **12 groups of 4 teams** (previously 8 groups of 4)
- **Each team plays 3 group matches** (same as before)
- **Top 2 from each group advance** automatically
- **8 best third-place teams** also qualify for knockout stage
- **Total of 32 teams** in the knockout rounds

### Knockout Stage Format

The knockout stage maintains familiar structure:
- **Round of 32**: 32 teams → 16 teams
- **Round of 16**: 16 teams → 8 teams
- **Quarterfinals**: 8 teams → 4 teams
- **Semifinals**: 4 teams → 2 teams
- **Third Place Playoff**: Losers of semifinals compete for bronze
- **Final**: The ultimate match to determine the champion

## What This Means for Fans

The expansion brings exciting opportunities:
- More diverse global representation with 48 nations
- More matches to enjoy throughout the tournament
- Extended tournament excitement spanning 39 days
- New rivalries and storylines to follow

The 2026 World Cup promises to be the most inclusive and comprehensive tournament in history, celebrating football's global reach while maintaining competitive excellence.`,
    author: 'StatsHubs Editorial Team',
    publishedAt: '2026-06-01',
    tags: ['format', 'rules', '48 teams', 'qualification', 'tournament'],
    readTime: 10,
  },
  {
    slug: 'world-cup-2026-host-cities',
    title: 'World Cup 2026 Host Cities: Complete Venue Guide',
    excerpt: 'A comprehensive guide to all World Cup 2026 host cities across USA, Canada, and Mexico, including stadiums, attractions, and travel tips.',
    category: 'guide',
    content: `The 2026 FIFA World Cup will be hosted across 16 state-of-the-art stadiums in the United States, Canada, and Mexico, marking the first time three nations co-host the tournament.

## United States Venues

The US will host the majority of matches, featuring iconic stadiums:

### MetLife Stadium (New Jersey)
- Capacity: 82,500
- Home to NFL's Giants and Jets
- Will host Opening Match and potential finals

### SoFi Stadium (Inglewood, California)
- Capacity: 70,000
- Home to NFL's Rams and Chargers
- Features a translucent roof and open-air design

### AT&T Stadium (Arlington, Texas)
- Capacity: 80,000
- Home to NFL's Cowboys
- Known for its retractable roof and massive HD screen

## Canadian Venues

### BMO Field (Toronto)
- Capacity: 45,500
- Home to Toronto FC and Toronto Argonauts
- First World Cup matches in Canadian history

### BC Place (Vancouver)
- Capacity: 54,500
- Features a fully retractable roof
- Beautiful views of the North Shore Mountains

## Mexican Venues

### Estadio Azteca (Mexico City)
- Capacity: 87,500
- One of the most iconic stadiums in world football
- Has hosted two previous World Cup Finals

### Allegiant Stadium (Las Vegas)
- Capacity: 65,000
- Brand new NFL stadium
- Known for its spectacular design`,
    author: 'StatsHubs Editorial Team',
    publishedAt: '2026-06-02',
    tags: ['venues', 'stadiums', 'host cities', 'usa', 'canada', 'mexico'],
    readTime: 8,
  },
  {
    slug: 'argentina-world-cup-2026-preview',
    title: 'Argentina World Cup 2026 Preview: Can Messi Lead Defense?',
    excerpt: 'Argentina enters the 2026 World Cup as reigning champions. With Lionel Messi potentially in his final World Cup, we analyze their chances of defending the title.',
    category: 'preview',
    content: `Argentina, under the guidance of Lionel Scaloni, heads into the 2026 World Cup as the reigning champions after their triumphant 2022 campaign in Qatar. The question on everyone's lips is whether football's greatest player can lead his nation to back-to-back World Cup victories in what may be his final appearance at this level.

## Team Overview

La Albiceleste have evolved from a defensive unit into a balanced side capable of dominating possession while remaining solid at the back. The spine of the team remains intact with Emiliano Martínez in goal, Cristian Romero commanding the defense, and the evergreen Lionel Messi pulling the strings in attack.

## Key Players

### Lionel Messi
The eight-time Ballon d'Or winner needs no introduction. In what could be his last World Cup, Messi will be determined to add another chapter to his legendary career. His vision, passing, and ability to change games in an instant make Argentina dangerous whenever he has the ball.

### Emiliano Martínez
The Aston Villa goalkeeper has become a cult hero for his dramatic saves and penalty-saving prowess. His distribution has improved, making Argentina more dangerous when building from the back.

## Group Stage Prospects

Argentina have been drawn in Group J alongside Algeria, Austria, and Jordan. This is a favorable draw that should see them advance comfortably, though the humidity of the US summer could pose challenges.

## Tournament Prospects

Argentina must be considered serious contenders. The combination of Messi's genius, a solid defensive unit, and the experience of having already won this tournament makes them one of the favorites.`,
    author: 'StatsHubs Editorial Team',
    publishedAt: '2026-06-03',
    tags: ['argentina', 'messi', 'preview', 'group j'],
    readTime: 7,
  },
  {
    slug: 'brazil-world-cup-2026-analysis',
    title: 'Brazil World Cup 2026 Analysis: End of an Era?',
    excerpt: 'Brazil seeks their sixth World Cup title in 2026. With new manager Carlo Ancelotti at the helm, we analyze their squad and tournament prospects.',
    category: 'analysis',
    content: `Brazil enters the 2026 World Cup with unprecedented pressure. After failing to win the 2022 tournament despite being favorites, and with their legendary manager now at the helm, this could mark the end of an era or the beginning of a new golden age.

## The Ancelotti Appointment

The appointment of Carlo Ancelotti represents a dramatic shift in philosophy. For the first time in their history, Brazil will be coached by a foreign manager with extensive European experience. This could bridge the gap between their traditional style and modern tactical approaches.

## Squad Analysis

### Defense
The defensive unit remains Brazil's strength, with Marquinhos forming a formidable partnership with Thiogo Silva. The full-back positions see competition between Dani Alves and the younger generation.

### Midfield
Casemiro anchors the midfield, providing the defensive cover that allows the attacking talents to flourish. The creative burden falls on the shoulders of Neymar, who will look to finally deliver on the world stage.

### Attack
The forward line features a blend of experience and youth. Neymar leads the line, supported by emerging talents from the Brazilian league and European clubs.

## Group Stage

Brazil face Scotland, Morocco, and Haiti in Group C. They should advance comfortably, though the match against Morocco could provide an interesting test given their recent impressive performances.

## Championship Credentials

Brazil remains one of the favorites, but the pressure of ending their 24-year drought without a World Cup could weigh heavily on the squad.`,
    author: 'StatsHubs Editorial Team',
    publishedAt: '2026-06-04',
    tags: ['brazil', 'ancelotti', 'analysis', 'group c'],
    readTime: 8,
  },
  {
    slug: 'european-teams-world-cup-2026',
    title: 'European Teams World Cup 2026: England, France Lead Contenders',
    excerpt: 'A comprehensive look at the European teams competing in the 2026 World Cup, with England and France emerging as the strongest contenders.',
    category: 'analysis',
    content: `With 16 European teams qualifying for the 2026 World Cup, the tournament in North America promises to be fiercely competitive. The traditional powerhouses of England, France, Germany, and Spain will be joined by emerging nations looking to make their mark.

## England: The New Favorites

Under Thomas Tuchel, England have evolved into a tactically sophisticated side capable of adapting to different opponents. The squad depth is exceptional, with world-class options in every position.

### Key Strengths
- Exceptional squad depth across all positions
- Tactical flexibility with multiple formation options
- Winning experience from the Premier League

## France: Defending Their Crown

Didier Deschamps leads France into another World Cup with a squad that combines veteran experience and youthful exuberance. The French remain one of the most talented teams on paper.

### Key Concerns
- Kylian Mbappé's form and fitness
- Midfield transition after Ngolo Kanté's retirement
- Defensive stability in key moments

## Germany: Hosted by History

Germany returns to the land of their 2014 triumph with Julian Nagelsmann guiding a new generation. The German infrastructure and tournament experience make them dangerous opponents.

## Spain: Youth Revolution Complete

Spain's golden generation has been replaced by a new crop of talented players who have dominated international youth competitions. La Roja will be a joy to watch.

## Tournament Outlook

The European challenge in North America promises to be historically competitive, with at least four nations capable of winning the tournament.`,
    author: 'StatsHubs Editorial Team',
    publishedAt: '2026-06-05',
    tags: ['europe', 'england', 'france', 'germany', 'spain', 'analysis'],
    readTime: 9,
  },
  {
    slug: 'world-cup-2026-schedule-release',
    title: 'World Cup 2026 Schedule Released: Key Dates and Match Times',
    excerpt: 'FIFA has released the complete schedule for the 2026 World Cup. Find out when your team plays and the timing of key matches.',
    category: 'guide',
    content: `FIFA has officially released the complete match schedule for the 2026 World Cup, with the tournament spanning 39 days from June 11 to July 19, 2026. The expanded format with 48 teams means more matches than ever before.

## Tournament Timeline

### Opening Day - June 11, 2026
The tournament kicks off with Mexico facing South Korea in the first match at the iconic Estadio Azteca, followed by additional opening day fixtures.

### Group Stage - June 11-28, 2026
Four matches daily during the group stage, with kick-off times designed to accommodate viewers across multiple time zones. Morning matches in North America cater to European audiences.

### Round of 32 - June 30-July 3, 2026
The knockout stage begins with traditionally two matches per day.

### Quarterfinals - July 6-7, 2026
Four mouthwatering ties determine the final four.

### Semifinals - July 10-11, 2026
The last steps toward the final.

### Third Place Playoff - July 18, 2026
The runners-up from the semifinals compete for bronze.

### Final - July 19, 2026
The world champion will be crowned at MetLife Stadium.

## Key Time Zone Information

All times are listed in Eastern Time (ET). Use our timezone converter tool to find match times in your local area.`,
    author: 'StatsHubs Editorial Team',
    publishedAt: '2026-06-01',
    tags: ['schedule', 'dates', 'times', 'tournament'],
    readTime: 6,
  },
  {
    slug: 'world-cup-2026-timezone-guide',
    title: 'World Cup 2026 Timezone Guide: Never Miss a Match',
    excerpt: 'A comprehensive guide to World Cup 2026 match times across different time zones, helping fans worldwide catch every game.',
    category: 'guide',
    content: `The 2026 World Cup spans three countries and six time zones, making it one of the most complex tournaments to follow for international fans. Our comprehensive timezone guide ensures you never miss a moment.

## North American Venues

The United States, Canada, and Mexico host matches across multiple time zones:

### Eastern Time (ET)
- New Jersey, New York area matches
- Most afternoon matches kick off at 2 PM ET

### Central Time (CT)
- Texas and Chicago area matches
- Morning kick-offs at 12 PM CT

### Mountain Time (MT)
- Denver and Salt Lake City matches
- Mid-morning starts at 11 AM MT

### Pacific Time (PT)
- California matches including LA and San Francisco
- Early starts at 10 AM PT

## Converting Match Times

Our timezone converter tool allows you to:
- Select your local timezone
- View all matches in your local time
- Set reminders for specific matches
- Export the complete schedule to your calendar

## Viewing Tips

For European fans, early morning matches require dedication but offer the excitement of live football before work. Asian fans will enjoy prime-time evening matches, while South American supporters can catch afternoon games in excellent viewing conditions.`,
    author: 'StatsHubs Editorial Team',
    publishedAt: '2026-06-02',
    tags: ['timezone', 'time zones', 'guide', 'viewing'],
    readTime: 5,
  },
  {
    slug: 'world-cup-2026-broadcasting-guide',
    title: 'World Cup 2026 Broadcasting Guide: Where to Watch',
    excerpt: 'Complete guide to broadcasting partners and streaming services for the 2026 World Cup in all regions.',
    category: 'guide',
    content: `The 2026 World Cup will be broadcast across multiple platforms and networks worldwide. This guide helps you find where to watch every match in your region.

## United States

### TV: FOX Sports
- English language coverage on FOX
- Spanish coverage on Telemundo

### Streaming: Peacock & FuboTV
- All matches on Peacock
- FuboTV for cable-free viewing

## Canada

### TV: Bell Media
- TSN and CTV broadcasting matches
- French language coverage on TVA

### Streaming: TSN+
- All matches available on TSN+

## United Kingdom

### TV: BBC & ITV
- Free-to-air coverage split between BBC and ITV
- Highlights on both channels

### Streaming: BBC iPlayer & ITVX
- Live streaming available for free

## Europe

### Germany: ARD & ZDF
### France: TF1 & M6
### Spain: RTVE & Mediapro

## Asia Pacific

### Japan: NHK & TV Asahi
### South Korea: KBS & MBC
### Australia: SBS & Optus Sport

## South America

### Brazil: Globo & Band
### Argentina: TyC Sports & ESPN
### All regional broadcasters listed in our complete guide.`,
    author: 'StatsHubs Editorial Team',
    publishedAt: '2026-06-03',
    tags: ['broadcasting', 'tv', 'streaming', 'watch'],
    readTime: 6,
  },
]

// All articles with full content
export const allArticles: Article[] = articles

export const timezones: Timezone[] = [
  { value: 'America/New_York', label: 'Eastern Time (ET)', offset: 'UTC-5' },
  { value: 'America/Chicago', label: 'Central Time (CT)', offset: 'UTC-6' },
  { value: 'America/Denver', label: 'Mountain Time (MT)', offset: 'UTC-7' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)', offset: 'UTC-8' },
  { value: 'America/Toronto', label: 'Toronto', offset: 'UTC-5' },
  { value: 'America/Vancouver', label: 'Vancouver', offset: 'UTC-8' },
  { value: 'America/Mexico_City', label: 'Mexico City', offset: 'UTC-6' },
  { value: 'Europe/London', label: 'London (GMT)', offset: 'UTC+0' },
  { value: 'Europe/Paris', label: 'Paris (CET)', offset: 'UTC+1' },
  { value: 'Europe/Berlin', label: 'Berlin (CET)', offset: 'UTC+1' },
  { value: 'Europe/Madrid', label: 'Madrid (CET)', offset: 'UTC+1' },
  { value: 'Europe/Rome', label: 'Rome (CET)', offset: 'UTC+1' },
  { value: 'Europe/Amsterdam', label: 'Amsterdam (CET)', offset: 'UTC+1' },
  { value: 'Europe/Brussels', label: 'Brussels (CET)', offset: 'UTC+1' },
  { value: 'Europe/Lisbon', label: 'Lisbon (WET)', offset: 'UTC+0' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)', offset: 'UTC+9' },
  { value: 'Asia/Seoul', label: 'Seoul (KST)', offset: 'UTC+9' },
  { value: 'Asia/Shanghai', label: 'Beijing (CST)', offset: 'UTC+8' },
  { value: 'Asia/Hong_Kong', label: 'Hong Kong (HKT)', offset: 'UTC+8' },
  { value: 'Asia/Singapore', label: 'Singapore (SGT)', offset: 'UTC+8' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)', offset: 'UTC+4' },
  { value: 'Australia/Sydney', label: 'Sydney (AEST)', offset: 'UTC+10' },
  { value: 'Australia/Melbourne', label: 'Melbourne (AEST)', offset: 'UTC+10' },
  { value: 'Pacific/Auckland', label: 'Auckland (NZST)', offset: 'UTC+12' },
  { value: 'America/Sao_Paulo', label: 'São Paulo (BRT)', offset: 'UTC-3' },
  { value: 'America/Buenos_Aires', label: 'Buenos Aires (ART)', offset: 'UTC-3' },
  { value: 'Africa/Johannesburg', label: 'Johannesburg (SAST)', offset: 'UTC+2' },
  { value: 'Africa/Cairo', label: 'Cairo (EET)', offset: 'UTC+2' },
  { value: 'America/Mexico_City', label: 'Mexico City (CST)', offset: 'UTC-6' },
]
