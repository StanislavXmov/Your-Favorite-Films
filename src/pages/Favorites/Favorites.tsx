import React, { useState } from "react";

import { Container, FilterBox } from "components";
import { Film } from "store/state";
import { Card, CardsWrapper, Pagination } from "components/UI";

const films: Film[] = [
  {
    adult: false,
    backdropPath: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
    genreIds: [12, 14],
    id: 671,
    originalLanguage: "en",
    originalTitle: "Harry Potter and the Philosopher's Stone",
    overview:
      "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
    popularity: 124.721,
    posterPath: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    releaseDate: "2001-11-16",
    title: "Harry Potter and the Philosopher's Stone",
    video: false,
    voteAverage: 7.9,
    voteCount: 20213,
  },
  {
    adult: false,
    backdropPath: "/8f9dnOtpArDrOMEylpSN9Sc6fuz.jpg",
    genreIds: [12, 14, 10751],
    id: 674,
    originalLanguage: "en",
    originalTitle: "Harry Potter and the Goblet of Fire",
    overview:
      "When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools — the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named. In this fourth film adaptation of J.K. Rowling's Harry Potter series, everything changes as Harry, Ron and Hermione leave childhood forever and take on challenges greater than anything they could have imagined.",
    popularity: 106.632,
    posterPath: "/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    releaseDate: "2005-11-16",
    title: "Harry Potter and the Goblet of Fire",
    video: false,
    voteAverage: 7.8,
    voteCount: 15487,
  },
  {
    adult: false,
    backdropPath: "/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
    genreIds: [12, 14],
    id: 672,
    originalLanguage: "en",
    originalTitle: "Harry Potter and the Chamber of Secrets",
    overview:
      "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
    popularity: 106.66,
    posterPath: "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    releaseDate: "2002-11-13",
    title: "Harry Potter and the Chamber of Secrets",
    video: false,
    voteAverage: 7.7,
    voteCount: 16395,
  },
  {
    adult: false,
    backdropPath: "/kT8bDEAgEYBKhRJtqM97qTw6uRW.jpg",
    genreIds: [12, 14],
    id: 767,
    originalLanguage: "en",
    originalTitle: "Harry Potter and the Half-Blood Prince",
    overview:
      "As Lord Voldemort tightens his grip on both the Muggle and wizarding worlds, Hogwarts is no longer a safe haven. Harry suspects perils may even lie within the castle, but Dumbledore is more intent upon preparing him for the final battle fast approaching. Together they work to find the key to unlock Voldemorts defenses and to this end, Dumbledore recruits his old friend and colleague Horace Slughorn, whom he believes holds crucial information. Even as the decisive showdown looms, romance blossoms for Harry, Ron, Hermione and their classmates. Love is in the air, but danger lies ahead and Hogwarts may never be the same again.",
    popularity: 88.581,
    posterPath: "/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    releaseDate: "2009-07-07",
    title: "Harry Potter and the Half-Blood Prince",
    video: false,
    voteAverage: 7.7,
    voteCount: 14552,
  },
  {
    adult: false,
    backdropPath: "/ve4TEHHmJdnEKVWSYlRa3DdoeKz.jpg",
    genreIds: [12, 14],
    id: 673,
    originalLanguage: "en",
    originalTitle: "Harry Potter and the Prisoner of Azkaban",
    overview:
      "Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.",
    popularity: 98.858,
    posterPath: "/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    releaseDate: "2004-05-31",
    title: "Harry Potter and the Prisoner of Azkaban",
    video: false,
    voteAverage: 8,
    voteCount: 16119,
  },
];
const CARDS_PER_PAGE = 9;

export const Favorites = () => {
  const [favoritesFilms, setfavoritesFilms] = useState<Film[]>(films);
  const [filteredFilms, setFilteredFilms] = useState<Film[]>(favoritesFilms);

  const [currentPage, setCurrentPage] = useState(0);
  const pagesAmountInPagination = Math.ceil(
    filteredFilms.length / CARDS_PER_PAGE
  );

  const renderFilmsCards = () => {
    return films
      .slice(
        currentPage * CARDS_PER_PAGE,
        currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
      )
      .map((film) => {
        const { id } = film;
        return <Card film={film} key={id} />;
      });
  };
  return (
    <Container>
      <h2>Your Favorite Films</h2>
      <FilterBox />
      <CardsWrapper>{filteredFilms && renderFilmsCards()}</CardsWrapper>
      {filteredFilms.length > CARDS_PER_PAGE && (
        <Pagination
          onChangePage={setCurrentPage}
          maxPageAmount={pagesAmountInPagination}
          currentPage={currentPage}
        />
      )}
    </Container>
  );
};
