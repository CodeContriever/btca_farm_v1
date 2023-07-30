{/* Farm Packages  */ }
<Wrapper className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  {licenses[0].title.map((title, index) => {
    return (
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 p-0 lg:p-4 "
      >

        <Card
          className="box-border border-solid border-1 border-gray-200 rounded-4 overflow-hidden py-[16px] px-[8px] flex flex-col flex-grow relative text-center mb-[16px]"
          key={licenses[0].id[index]}
        >
          <CardHeader
            className="box-border mb-0 mt-0 relative"
          >
            <h1
              className="text-gray-700 font-inter text-[16px] font-bold leading-6 uppercase mt-4"
            >
              {title}
            </h1>

            <Box
              className="border-box h-[64px] right-[8px] top-0 w-[36px] absolute"
            >
              <Image src={licenses[0].image} alt="Logo" />
            </Box>
          </CardHeader>

          <CardBody
            className="border-box mb-0 mt-[16px] rounded-md py-3 px-2 bg-gray-100"
          >

            <VStack spacing='30px'>
              <Box>
                <Text
                  className="text-gray-800 font-inter text-[16px] font-bold leading-6 break-words flex flex-wrap justify-center items-center"
                >
                  {licenses[0].licenseFor.title}
                </Text>
                <Text
                  className="box-border outline-none"
                >
                  {licenses[0].licenseFor.text}
                </Text>
              </Box>

              <Box>
                <Text
                  className="box-border mb-0 mt-0 text-gray-500 text-xs uppercase"
                >
                  {licenses[0].maxLoad.upTo}
                </Text>

                <Text
                  className="box-border mb-0 mt-0 gap-y-0 gap-x-8 text-gray-700 font-inter text-base font-bold leading-6 break-words flex flex-wrap justify-center"
                >
                  {` ${licenses[0].maxLoad.load.number[index]} `}
                </Text>

                <Text
                  className="box-border mb-0 mt-0 text-gray-400 font-inter text-sm font-normal leading-6"
                >
                  {licenses[0].maxLoad.load.text}
                </Text>
              </Box>

              <Box>
                <Text
                  className="box-border mb-0 mt-0 gap-x-2 text-gray-700 font-inter text-lg font-bold leading-6 break-words text-center"
                >
                  {`${licenses[0].validity.number} ${licenses[0].validity.year} ${licenses[0].validity.validity}`}
                </Text>
              </Box>
            </VStack>
          </CardBody>

          <CardFooter
            className="box-border flex flex-col  mt-4"
          >
            <Text
              className="box-border mb-4 text-2b2d33 font-Inter text-base font-medium leading-6 mt-4"
            >
              {`${licenses[0].amount.number[index]}`}
            </Text>

            <a
              className="box-border text-decoration-none rounded-md outline-none transition duration-300 ease-in-out text-base break-words items-center cursor-pointer inline-flex justify-center leading-none relative text-center bg-[#A020F0] text-white py-2 px-4 min-h-[40px]"
              href="/purchase"
              target="_blank"
            >
              {"Purchase"}
            </a>
          </CardFooter>

        </Card>

      </div>
    );
  })}
</Wrapper>