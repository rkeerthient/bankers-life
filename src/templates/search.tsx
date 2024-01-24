import "../index.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import {
  AppliedFilters,
  Facets,
  Pagination,
  ResultsCount,
  SearchBar,
  StandardCard,
  VerticalResults,
  Geolocation,
  UniversalResults,
  DirectAnswer,
  onSearchFunc,
  VerticalConfigMap,
} from "@yext/search-ui-react";
import {
  SearchHeadlessProvider,
  UniversalLimit,
  provideHeadless,
  useSearchActions,
  useSearchState,
} from "@yext/search-headless-react";
import searchConfig from "../components/searchConfig";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Video from "../components/cards/Video";
import File from "../components/cards/File";
import FAQ from "../components/cards/FAQ";
import Product from "../components/cards/Product";
import Insights from "../components/cards/Insights";

export const config: TemplateConfig = {
  name: "search",
};
export const getPath: GetPath<TemplateRenderProps> = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
}): HeadConfig => {
  return {
    title: "Banker's Life | Search",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: relativePrefixToRoot,
        },
      },
    ],
  };
};

const verticals = [
  { name: "All", verticalKey: "", cardType: StandardCard, classes: "" },
  {
    name: "Videos",
    verticalKey: "videos",
    cardType: Video,
    classes: "grid grid-cols-3 gap-4",
  },
  { name: "FAQs", verticalKey: "faqs", cardType: FAQ, classes: "" },
  { name: "Products", verticalKey: "products", cardType: Product, classes: "" },

  {
    name: "Policies & Forms",
    verticalKey: "files",
    cardType: File,
    classes: "",
  },
  {
    name: "Insights",
    verticalKey: "insights",
    cardType: Insights,
    classes: "grid grid-cols-3 gap-4",
  },
];
const SearchWrapper: Template<
  TemplateRenderProps
> = ({}: TemplateRenderProps) => {
  return (
    <SearchHeadlessProvider searcher={provideHeadless(searchConfig)}>
      <PageLayout>
        <div className="w-full min-h-screen">
          <SearchPane></SearchPane>
        </div>
      </PageLayout>
    </SearchHeadlessProvider>
  );
};
export default SearchWrapper;

const verticalLimit: UniversalLimit = {
  files: 4,
};

export const SearchPane = () => {
  const [currentVertical, setCurrentVertical] = useState<string>("");
  const searchActions = useSearchActions();
  const facets = useSearchState((state) => state.filters.facets);
  const filters = useSearchState((state) => state.filters.static);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [vectorResults, setVectorResults] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    searchTerm && searchActions.setQuery(searchTerm);
    const queryParams = new URLSearchParams(window.location.search);
    if (searchTerm) {
      queryParams.set("query", searchTerm);
    } else {
      queryParams.delete("query");
    }
    if (currentVertical) {
      queryParams.set("verticalKey", currentVertical);
    } else {
      queryParams.delete("verticalKey");
    }
    history.pushState(null, "", "?" + queryParams.toString());
    currentVertical
      ? (searchActions.setVertical(currentVertical),
        searchActions.executeVerticalQuery().then(() => setIsLoading(false)))
      : (searchActions.setUniversal(),
        searchActions.setUniversalLimit(verticalLimit),
        searchActions.executeUniversalQuery().then((res) => {
          setVectorResults(
            res!.verticalResults.find(
              (item) => item.source === "DOCUMENT_VERTICAL"
            )?.results || []
          );
          setIsLoading(false);
        }));
  }, [currentVertical, searchTerm]);

  const handleSearch: onSearchFunc = (searchEventData) => {
    const { query } = searchEventData;
    query && setSearchTerm(query);
    const queryParams = new URLSearchParams(window.location.search);
  };
  const Grid3Section = ({ results, CardComponent, header }: any) => {
    if (!CardComponent) {
      return <div>Missing Card Component</div>;
    }
    return (
      <div>
        <div>{header}</div>
        <div className="grid grid-cols-3 gap-1 md:grid-cols-3 md:gap-8 ">
          {results.map((r: any, index: number) => (
            <CardComponent key={index} result={r} />
          ))}
        </div>
      </div>
    );
  };
  const FlexSection = ({ results, CardComponent, header }: any) => {
    if (!CardComponent) {
      return <div>Missing Card Component</div>;
    }
    return (
      <div>
        <div>{header}</div>
        <div className="flex flex-col gap-4 ">
          {results.map((r: any, index: number) => (
            <CardComponent key={index} result={r} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="flex  w-full">
      <div className="w-1/4 bg-gradient-to-b from-[#385b7b]  to-[#2e745b] min-h-screen"></div>
      <div className="w-3/4">
        <div className="flex flex-col px-4">
          <div className="h-40 bg-[#e0e0e0]"></div>
          <div className="flex flex-col gap-4 p-4">
            <SearchBar onSearch={handleSearch}></SearchBar>
            <div className="border-b-2">
              <div className="w-full px-8 flex justify-between  items-center text-lg font-semibold">
                {verticals.map((item, index) => (
                  <div
                    key={index}
                    className={`hover:cursor-pointer hover:border-b-4 hover:border-blue-400 border-b-4  ${currentVertical === item.verticalKey ? `border-blue-400` : ` border-transparent`}`}
                    onClick={() => {
                      setIsLoading(true);
                      setCurrentVertical(item.verticalKey);
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <>
            {isLoading ? (
              <div className="flex h-[85vh] justify-center items-center w-full">
                <Loader />
              </div>
            ) : (
              <div
                className={`flex mt-4 ${currentVertical ? `flex-row` : `flex-col`}`}
              >
                {currentVertical ? (
                  <>
                    {facets && facets.length >= 1 && (
                      <div className="w-72 mr-5 hidden md:block">
                        <Facets
                          customCssClasses={{ facetsContainer: "mr-10" }}
                        ></Facets>
                      </div>
                    )}
                    <div className={`w-full `}>
                      <div className="hidden md:flex w-full items-baseline justify-between">
                        <ResultsCount />
                      </div>
                      <div className="flex justify-between mb-4">
                        <AppliedFilters />
                      </div>
                      <div className="flex flex-col space-y-4 ">
                        <VerticalResults
                          CardComponent={
                            verticals.filter(
                              (item) => item.verticalKey === currentVertical
                            )[0].cardType
                          }
                          customCssClasses={{
                            verticalResultsContainer: `${
                              verticals.filter(
                                (item) => item.verticalKey === currentVertical
                              )[0].classes
                            } || flex gap-4 flex-col`,
                          }}
                        />
                        <div>
                          <Pagination />
                          <Geolocation />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="mx-8">
                    <DirectAnswer
                      customCssClasses={{ answerContainer: "my-4" }}
                    />
                    <ResultsCount />
                    <AppliedFilters
                      customCssClasses={{
                        appliedFiltersContainer: `!flex flex-row`,
                      }}
                    ></AppliedFilters>
                    {/* {vectorResults && (
                      <div className="flex flex-col gap-4 ">
                        {vectorResults.map((item, index) => {
                          return (
                            <div
                              className="border p-4 flex flex-col"
                              key={index}
                            >
                              <div className="text-lg font-bold">
                                {item.name}
                              </div>
                              <div className="my-3 break-words">
                                {item.segment.text}
                              </div>
                              <div className="italic text-right">
                                Score: {item.segment.score}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )} */}
                    <UniversalResults
                      showAppliedFilters={true}
                      customCssClasses={{
                        universalResultsContainer: "w-full my-6 ",
                        sectionHeaderIconContainer: "hidden",
                        sectionHeaderLabel: "-mb-4",
                      }}
                      verticalConfigMap={{
                        files: {
                          SectionComponent: FlexSection,
                          CardComponent: File,
                          label: "Policies & Forms",
                          viewAllButton: true,
                        },
                        faqs: {
                          SectionComponent: FlexSection,
                          CardComponent: FAQ,
                          label: "FAQs",
                          viewAllButton: true,
                        },
                        products: {
                          SectionComponent: FlexSection,
                          CardComponent: Product,
                          label: "Products",
                          viewAllButton: true,
                        },
                        insights: {
                          SectionComponent: Grid3Section,
                          CardComponent: Insights,
                          label: "Insights",
                          viewAllButton: true,
                        },
                        videos: {
                          SectionComponent: Grid3Section,
                          CardComponent: Video,
                          label: "Videos",
                          viewAllButton: true,
                        },
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};
