<template>
  <div class="pt-13 pb-16">
    <div class="limit__container mx-auto">
      <GoBack url="/platform/profile/company"/>
      <div class="register__account__form dev__account">
        <v-row>
          <v-col cols="9">
            <v-card class="light__card no-shadow border-radius-8 fill-height">
              <v-container class="v__container">
                <div class="form__avatar d-flex align-center justify-start">
                  <img class="avatar"
                       src="https://img.freepik.com/premium-photo/profile-handsome-guy-building-book-shelf-handmade-design-wooden-industry-measuring-length-woodwork-workshop-indoors_274222-19506.jpg?w=2000"
                       alt="">
                  <div>
                    <div class="dev__name">Kanagat Zhumagaliev</div>
                    <div class="dev__experience">3 months</div>
                  </div>
                </div>
                <div class="form__title mb-2">
                  About
                </div>
                <div class="form__text mb-10">
                  Welcome to my profile! I’m a web development expert with more than 10 years of experience in the
                  field.
                  I am keen on cutting-edge technologies and helping businesses achieve their objectives. But, as a
                  technical expert, I also embed my unique approach to working with clients.
                </div>
                <v-row>
                  <v-col
                    cols="3"
                  >
                    <div class="form__title mb-2">
                      Phone
                    </div>
                    <div class="form__text">
                      8(777)777-77-77
                    </div>
                  </v-col>
                  <v-col
                    cols="3"
                  >
                    <div class="form__title mb-2">
                      Email
                    </div>
                    <div class="form__text">
                      Example@gmail.com
                    </div>
                  </v-col>
                  <v-col
                    cols="3"
                  >
                    <div class="form__title mb-2">
                      Location
                    </div>
                    <div class="form__text">
                      Example@gmail.com
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="light__card no-shadow pa-4 offers border-radius-8 fill-height">
              <div>
                <div class="d-flex align-center font-weight-medium mb-4">
                  <svg width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="50" height="46" fill="url(#pattern0)"/>
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_126_2102" transform="translate(0 -0.0404421) scale(0.0027933 0.00303619)"/>
                      </pattern>
                      <image id="image0_126_2102" width="358" height="356" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAAFkCAYAAAAT7pEdAAAMQWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBooUsJvQkCUgJICaEFkF4EUQlJgFBiDAQVO7Ko4FpQsYANXRVR7IBYUESxsCj2vlhQUdbFgl15kwK67ivfm++bO//958x/zpw7c+8dANROcESiXFQdgDxhgTg2JIA+LjmFTnoCKAADugAHDhxuvogZHR0BYBlq/17eXQeItL3iINX6Z/9/LRo8fj4XACQa4nRePjcP4oMA4NVckbgAAKKUN59aIJJiWIGWGAYI8UIpzpTjailOl+O9Mpv4WBbEbQAoqXA44kwAVC9Bnl7IzYQaqv0QOwl5AiEAanSIffPyJvMgToPYBtqIIJbqM9J/0Mn8m2b6sCaHkzmM5XORFaVAQb4olzP9/0zH/y55uZIhH1awqmSJQ2Olc4Z5u5kzOVyKVSDuE6ZHRkGsCfEHAU9mDzFKyZKEJsjtUUNuPgvmDOhA7MTjBIZDbAhxsDA3MkLBp2cIgtkQwxWCThMUsOMh1oN4IT8/KE5hs0k8OVbhC23IELOYCv4sRyzzK/V1X5KTwFTov87isxX6mGpRVnwSxBSILQoFiZEQq0LsmJ8TF66wGVOUxYocshFLYqXxW0AcyxeGBMj1scIMcXCswr4sL39ovtimLAE7UoH3F2TFh8rzg7VxObL44VywS3whM2FIh58/LmJoLjx+YJB87tgzvjAhTqHzQVQQECsfi1NEudEKe9yMnxsi5c0gds0vjFOMxRML4IKU6+MZooLoeHmceFE2JyxaHg++DEQAFggEdCCBNR1MBtlA0NnX2Afv5D3BgAPEIBPwgYOCGRqRJOsRwmscKAJ/QsQH+cPjAmS9fFAI+a/DrPzqADJkvYWyETngCcR5IBzkwnuJbJRw2FsieAwZwT+8c2DlwnhzYZX2/3t+iP3OMCEToWAkQx7pakOWxCBiIDGUGEy0xQ1wX9wbj4BXf1hdcAbuOTSP7/aEJ4QuwkPCNUI34dYkQbH4pyjHgm6oH6zIRfqPucCtoKYbHoD7QHWojOvgBsABd4V+mLgf9OwGWZYibmlW6D9p/20GPzwNhR3ZiYySdcn+ZJufR6raqboNq0hz/WN+5LGmD+ebNdzzs3/WD9nnwTb8Z0tsIXYAa8dOYuewo1gjoGMtWBPWgR2T4uHV9Vi2uoa8xcriyYE6gn/4G3qy0kzmO9U59Tp9kfcV8KdJ39GANVk0XSzIzCqgM+EXgU9nC7mOI+kuTi4uAEi/L/LX15sY2XcD0en4zs3/AwCflsHBwSPfubAWAPZ5wO1/+Dtnw4CfDmUAzh7mSsSFcg6XXgjwLaEGd5o+MAbmwAbOxwW4A2/gD4JAGIgC8SAZTITRZ8F1LgZTwUwwD5SCcrAMrALrwEawBewAu8F+0AiOgpPgDLgALoFr4A5cPT3gBegH78BnBEFICBWhIfqICWKJ2CMuCAPxRYKQCCQWSUbSkExEiEiQmch8pBypQNYhm5FaZB9yGDmJnEO6kFvIA6QXeY18QjFUBdVCjVArdBTKQJloOBqPTkAz0SloEVqCLkHXoDXoLrQBPYleQK+h3egLdAADmDKmg5liDhgDY2FRWAqWgYmx2VgZVonVYPVYM3zOV7BurA/7iBNxGk7HHeAKDsUTcC4+BZ+NL8bX4TvwBrwNv4I/wPvxbwQqwZBgT/AisAnjCJmEqYRSQiVhG+EQ4TTcSz2Ed0QiUYdoTfSAezGZmE2cQVxMXE/cQzxB7CI+Ig6QSCR9kj3JhxRF4pAKSKWktaRdpBbSZVIP6YOSspKJkotSsFKKklCpWKlSaafScaXLSk+VPpPVyZZkL3IUmUeeTl5K3kpuJl8k95A/UzQo1hQfSjwlmzKPsoZSTzlNuUt5o6ysbKbsqRyjLFCeq7xGea/yWeUHyh9VNFXsVFgqqSoSlSUq21VOqNxSeUOlUq2o/tQUagF1CbWWeop6n/pBlabqqMpW5anOUa1SbVC9rPpSjaxmqcZUm6hWpFapdkDtolqfOlndSp2lzlGfrV6lflj9hvqABk3DWSNKI09jscZOjXMazzRJmlaaQZo8zRLNLZqnNB/RMJo5jUXj0ubTttJO03q0iFrWWmytbK1yrd1anVr92prartqJ2tO0q7SPaXfrYDpWOmydXJ2lOvt1rut80jXSZerydRfp1ute1n2vN0LPX4+vV6a3R++a3id9un6Qfo7+cv1G/XsGuIGdQYzBVIMNBqcN+kZojfAewR1RNmL/iNuGqKGdYazhDMMthh2GA0bGRiFGIqO1RqeM+ox1jP2Ns41XGh837jWhmfiaCExWmrSYPKdr05n0XPoaehu939TQNNRUYrrZtNP0s5m1WYJZsdkes3vmFHOGeYb5SvNW834LE4uxFjMt6ixuW5ItGZZZlqst2y3fW1lbJVktsGq0ematZ822LrKus75rQ7Xxs5liU2Nz1ZZoy7DNsV1ve8kOtXOzy7Krsrtoj9q72wvs19t3jSSM9BwpHFkz8oaDigPTodChzuGBo45jhGOxY6Pjy1EWo1JGLR/VPuqbk5tTrtNWpzvOms5hzsXOzc6vXexcuC5VLldHU0cHj54zumn0K1d7V77rBtebbjS3sW4L3Frdvrp7uIvd6917PSw80jyqPW4wtBjRjMWMs54EzwDPOZ5HPT96uXsVeO33+svbwTvHe6f3szHWY/hjto555GPmw/HZ7NPtS/dN893k2+1n6sfxq/F76G/uz/Pf5v+UacvMZu5ivgxwChAHHAp4z/JizWKdCMQCQwLLAjuDNIMSgtYF3Q82C84MrgvuD3ELmRFyIpQQGh66PPQG24jNZdey+8M8wmaFtYWrhMeFrwt/GGEXIY5oHouODRu7YuzdSMtIYWRjFIhiR62IuhdtHT0l+kgMMSY6pirmSaxz7MzY9jha3KS4nXHv4gPil8bfSbBJkCS0JqolpibWJr5PCkyqSOoeN2rcrHEXkg2SBclNKaSUxJRtKQPjg8avGt+T6pZamnp9gvWEaRPOTTSYmDvx2CS1SZxJB9IIaUlpO9O+cKI4NZyBdHZ6dXo/l8VdzX3B8+et5PXyffgV/KcZPhkVGc8yfTJXZPZm+WVVZvUJWIJ1glfZodkbs9/nROVszxnMTcrdk6eUl5Z3WKgpzBG2TTaePG1yl8heVCrqnuI1ZdWUfnG4eFs+kj8hv6lAC/7Id0hsJL9IHhT6FlYVfpiaOPXANI1pwmkd0+2mL5r+tCi46LcZ+AzujNaZpjPnzXwwizlr82xkdvrs1jnmc0rm9MwNmbtjHmVezrzfi52KK4rfzk+a31xiVDK35NEvIb/UlaqWiktvLPBesHEhvlCwsHPR6EVrF30r45WdL3cqryz/spi7+Pyvzr+u+XVwScaSzqXuSzcsIy4TLru+3G/5jgqNiqKKRyvGrmhYSV9ZtvLtqkmrzlW6Vm5cTVktWd29JmJN01qLtcvWflmXte5aVUDVnmrD6kXV79fz1l/e4L+hfqPRxvKNnzYJNt3cHLK5ocaqpnILcUvhlidbE7e2/8b4rXabwbbybV+3C7d374jd0VbrUVu703Dn0jq0TlLXuyt116Xdgbub6h3qN+/R2VO+F+yV7H2+L23f9f3h+1sPMA7UH7Q8WH2IdqisAWmY3tDfmNXY3ZTc1HU47HBrs3fzoSOOR7YfNT1adUz72NLjlOMlxwdbiloGTohO9J3MPPmodVLrnVPjTl1ti2nrPB1++uyZ4DOn2pntLWd9zh4953Xu8HnG+cYL7hcaOtw6Dv3u9vuhTvfOhoseF5sueV5q7hrTdfyy3+WTVwKvnLnKvnrhWuS1rusJ12/eSL3RfZN389mt3Fuvbhfe/nxn7l3C3bJ76vcq7xver/nD9o893e7dxx4EPuh4GPfwziPuoxeP8x9/6Sl5Qn1S+dTkae0zl2dHe4N7Lz0f/7znhejF577SPzX+rH5p8/LgX/5/dfSP6+95JX41+HrxG/0329+6vm0diB64/y7v3ef3ZR/0P+z4yPjY/inp09PPU7+Qvqz5avu1+Vv4t7uDeYODIo6YI/sVwGBFMzIAeL0dAGoyADR4PqOMl5//ZAWRn1llCPwnLD8jyoo7APXw/z2mD/7d3ABg71Z4/IL6aqkARFMBiPcE6OjRw3XorCY7V0oLEZ4DNrG/puelg39T5GfOH+L+uQVSVVfwc/sviLN8ViFnHu8AAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAWagAwAEAAAAAQAAAWQAAAAA/EEJ+AAAKC1JREFUeAHtnd15G0eWhguU7skIzH4sz7W5ERATgbgRGI7AnAhMRTCcCAxHsFQEA0Yw9PXa3qYjIO8lYL/TQEsQBBANoBt1qvrFY4tA/9TPW1Vfnzr10yHwgQAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIOCUwCB2ut4UxUiJKGKno+v4P4QwLvVZF0+hz+sQRuvOxTo2DeHpJISHbfH/XpaTbdd4OO+R8TousxBKtYdy3bn6mM4//W9Zbi2b+nr+pkdAZRz38+a8mCgFl3FT0X3sg0H4exMR+64ohovUVH9ns1D/ToXR/SL9QXme2PdabLwIikT6TA/Cizqd+jusv8+mOj4IZ4vfds1pfc7x32elbS7Us/A0OJl/F/cHYy6jwGyC0nH6SdoKAYR5BUhXP5sK87b4a+GWRXshi/ZsSUhSERHL4lxIZrIOTyrrcOJdPCTm1qspLPESvDM1HONdfdc/1Xf7rY/nB+ij0lfqwVMJtr67525A+/hBmI9U6m0J87bk/q0oLkw4dN1wYW17Fop12bmX0JUzWX168Dw06WWsC8TDsfohammpH6T23enD9N4EW8mruOMqsZKK90GYj8T+WMK8LjsmEBLrq4HcIvr7/bprnB+rRWPyUVaeeuVPztPbOHkyxCu3igm3GmOxsL69PEzvVW8nqjMPuXFvXECRLkSYjwQ+pjAvZ1FCUMgSvTqZhVGiIi3DLvw2k2Do713KFvVyuax+t56PxHA4mMr/PahcJeer1xz7dx+4H5vppvgQ5k1kWj7uRZiXs2Ui/SqEa1lpIx1PYZBrOfn192elfxJOwp2E7C4na7rOoP1dEeq3y+cife8F90hszfiI+2FWRlz+dew2bVECd6Pf0S2zOk17/Z2F97mLtJ6nZ3qgDuW4vlILvhKn+A/VHnDfqz7ueRPCvCe4XW/zaDGvy0Plj54L9OW680kdm4vF+I+yvEsq3TsmtnqozkXagyVtU1V+tYdj7tx3LKadLkeYd8K1/8WpCHOdQzX2KzWwW/1O24KeZ+hR/McvLfKp853yX1nS1UIlzcYZKR8eyq3mfpuri6mr+oIwd0V2JdzUhLlO/rdFca3ZHDf6Hb+7XCfqkL+y5k5Owm3u08GqFbWzcD3zMgtH3D+ehBsJdHlI8fXlXg3Q84HAZgJ/luXtx0GwaVzvN1+V0JlB+GE6C/+xsY3lecYJ5aBRUuVGGP/+WF6YQaAb7hvd1OVF4v5qFv4vd+5tIUSY2yKZcTjWDf3jr9IGmv5b2bRVezl8LtXl/3fuQmHTCf94LIcLgX50UHC94H4oZ4T5UII9ut8Gc2Q9XyjL8S2w9rh/EopCn/aC9RXSQqALPVx/VMo8PFzn3L8pxjlz37cWIMz7kuvpfeYjNAtMDfxfmSG4rLraRXEroTjLLG+fsmMujso15aX8Fi4OuZVucub+qQAafkGYG4Lisi8JqIFfL6yvL0+k/msWfpJAl9WslNTzsiH9lWtK5TeY+589uDeC3Eo/i/tDzn7/DcWx9jDCvBYLB5sQMOtr0bg9dI2bJLnpNaca7PyfN98UdzlbcebeqFxTNu/Yx+e88vtn3mtpghphbkKJazYSsMZ9MghDXZCbOAf1CN72wnr+qxw58j3bAhXrtfTaekaYN0oOJ5oSsDnB2Yqzzd8261lWXFMeKV5nvR9nZVhZz+Z7TpHnoWlGmA8lyP0VgczFubLivjsvHuTaKHItcitDGxgcaPc+L3k033PuLqV1rBHmdVQ4theBajXdQLvVZfqxVXTWxbad3jLNYrCBwQ9yTXkSZ3MpvdYOgjlzX61PCPMqEX4fRMC6xNor+R8HBeL75tNq5aDtxpfpx8TZVg3KheNlUFBJCd+Le2/EGWHOtHHFzJYt41ZLeh8zDZ3HPQu/yO886jyeiBFotefIkzgLhT0UeyHOCHPEip9z1NqwZqT8PeacR4lW9uKscrx25dZYiHPuD0WEOWvliJc56w5rlP8qXgqOFHPm4uzS5zyfKXObs88ZYT5S++1jNDYYOBiEd9nnvR/ibA9ZT3PVs3ZrIMzZq0bcDGoByo1SkLdLwxDPxTnbHoIs51IPWW/5q8RZMxgLK4KcPghzTqXpNC9q0COnSWs3WbMwzrl7bas8VZbeekCnmkqX3dJ5hLndpkloawhYg85+lsY832bBZScSy0VqPaCBowUolrZqfvk0jJfTmfp3hDn1Ekwk/Ta6n0hSD03m+avMRGIViBagePM3V/ua2GvQVtOa6m+EOdWSSyzd5qOUafNrYsneL7laqZaTSKxCWPibb1ePx/5t76bMxZWEMMeuTT2K317G2ZfsmkhoTKrINb9OB3VPtbfGOAfmCHMOpZhIHnplNWuurfbVyEIkNlUvDQSONp2Lddz8zTn0VhDmWDWop/EOTvIWq5Vivcx5hVo1qOvw/Y859FYQ5pWWxM9uCVhj9jaq32mOZ+FWHo2zTuOIGLis5puI0W+K+lQDsB7TtSm9Xx1HmL9CwoGuCWj3OXcDRx3m+fR1yHdGilerWVuF/qAHYtFhuXYaNMLcKV4CX0fgYwh3647nekwDUtdYzccv3ZStZoT5+PWl9zFqEPCpJwtO6rLug9X8WGfWzd+ErWaE2U0t6llCTrCacypxr+6pVK1mhDmn1pFQXvrmzlDRnL4K7jYBaq3GTIPT2TZzqzm5wVeEubWqSUC7EKjcGQ6nWu2Sh12v1TSu613vSeV6z+4pidwoFY51OhHmmgR/j05A3d9+DQJq8UMuS4bXVhan7qmTGcK8trw4CIF1BNS1n6w7nvMxdflHuebPq3vKVgOm9kDEYs61lSSQL3vDSQLJbDeJs3z9zJ7dUxLnq3YLstvQEOZu+RL6dgL32y/J6orz1Ky3Xei7dU8l9kBEmHepdVzbOgEt6Z20HqjzANXlHzpP4t7J8+qeMndGSot8EOa9qyA3tkFADaZ37gzNzkiqW71LOXt2T+mhkQx3hHmXWse1rRNQBSxbD9R/gJf+k3hQCr26py4OytURb0aYjwibqL4m4NnC+jq17R3J2c/s1T2lnsqwvRLsNiSEuVu+hN6AwMDZyz0bJPngSzRtLhnrbdfMenVPmZ9517zEuh5hjkWeeD8RUIN5+vSjP1+yFWaJSum1GFPpqSDMXmtQn9I16N8AoHbXy1aYPbun1FMpUmhaCHMKpZR5GuXK6KPFnIRAHFD1Hg+4t7NbVdeSeCAizJ1VAQJuSkCujLLptRldd55RXtZlpVx3MPYx1bWz2GloEj/C3IQS13RKQFZM2WkETgNPacHDzghnTntBibiQEOadaxw3QKAdAnoXYBLd6n1yq7ehP+xzH/fMCSDM1AQIQKA3BNQ7w5XRm9ImowcR+NDDZdkHAePmvQnIx5zEXGYs5r2LmBvbIrDYLrKt4AjHAYGeDui2Rh5hbg0lAUEAAjWBvg7o1vk/9C/CfChB7ocABCDQMgGEuWWgBAcBCEDgUAII86EEuR8CEIBAywQQ5paBEhwEIACBQwkgzIcS5H4IQCAlAo8pJBZhTqGUMk+jliYXmWdxbfY0c+Fp7Yk8Dg6dZqN0mq4vkoUwf4GDHzEIaGlyESPe2HF63h4zNpu+x48w970GkH8I9InALI0NsxDmPlVK8uqGgNwYv7lJTAcJmU19btCkzZXKDrLbepAIc+tICXAPAsM97kn6Fi1Zztm/HMLA52ZBqSwVR5iTbt4kPlUCXt8k3SLPosWwWgtKPZWytcA6DAhh7hAuQTcjMEvotfLNcrT9qlQst+052XjF+cYzEU+kspMhwhyxkhB1fwmo4WW7kfx3RTF0WrKPqexkiDA7rUE9S9Zlz/Ibcp4qp95A4bI8Z+k8DBFmlzWoP4nq6eKS+8xL+MJj/lJ63RXC7LEG9ShNrzJ+792mYsx94G/gd8xgsqlMvB1HmL2VSM/So1Fyl9ZVx8Uw6Tj8aMGrB3QmV4bH1zc9/16WyXBHmKNVYSI2Aj2ckZGUQOxaS9UDGu56z1Gun4XJUeJpKRKEuSWQBLM3gX4N/M3C3d6kUrhxGq5cJvMkLe4Is8ta1I9EOZ5W1V0BJCYQO4MY+BTmjwFh3rksuaGfBOSL9GlddVccz3+UZbYW85uisPI87Q7fniHPwvtU5i/XOcRirknw9+gEHI/ed8NiEMbdBOwkVNwYrRUEwtwaSgLahYDNX3Y6er9LNna6Vt3p251uSOhim42hjYs89oCslzJOCGWVVIQ5tRLLJL2qeB4bcZd079WdLruMIGbYmo3h042RaC8FYY5Zm3sct9wY133K/mAQbrLO78xn/lLtpSDMWbcWn5n7W1FcKGXnPlPXSaruU1rcsCsBDfqNdI+/8pyFX1PtpSDMu9ZCrj+YwHSKtXwwRE8BeLWWT3xa8U2KDmFuQolrWiOwGCT6obUA/QeEtRyjjBK2lg0Xwhyj0vQ4Tr0Ru1e+5ZNB5vn1aS0/f0zYWkaYeyyQMbJu1rL2xuiPMA/Cv3Led1krN29Uj9z5ljXQepuqb7lul1jMNQn+dk5gYS37WxnWTc6fNSPgppug44eqh2zh8SGr3Qp/00Br8twR5vh1vBcp6KG1PJLV9pRr4b6aVasY3T1kZS2PcmCOMOdQignkQQsQbpRMdw25E3RyYeS8J8bChXHZCbsDApUov8vFdYQwH1ARuLUZgWre8iz81OzqtK+yrnTOLgwrS7kwfnZYSjb75cZhuvZKEsK8FzZu2oXAdJbvHhErHJ4/aL+IXF0Y5o5SWU5W8uzh5/NHn/t07M0GYd4bHTc2IfBtUdgsDHfd3iZp3/UadaVNlMtd70vhehPl13NRdueO0pTEYW4PQ4Q5hVaRaBqt26s9MW4STf5uyR6EH3Nedv1qGm5nHt/lJ+65+JWXKxzCvEyD760RMAtLvsixAnRnYbWWyTogiUOKW0vWyd/29803xVhbev6w7bqjn8+YO8J89NrUjwjdWlht49fSX0S5bagNwpvPfBk3uDLJSxDmJIvNd6Irv7JHC6tlbPIpv/vjr3LUcrBugnNrKc8fhlmvIH3tphaQkCwIVFtAzsI/s8jMS5mY+5THL12S6jlzQ6nHY+6Lt+7yYO6LxzJL7sussZiXafD9IAIS5aswC78cFIj/m58lWNn6lCXKRTX7wqsoJ/iaqH2qNBbzPtS45ysCNgNDc1zHX53I68CzTc3KcRaAFZNW9A01YHun2RfeBmyf5Ta6ynnWy2ozwWJeJcLvnQmY+0Ki/B/d6K1B75yXF2641yKGImNRvpEo/9tbGVYrKQfhok+ibHUQi/mFlsip7QQWPuWs3Rey1t7ltNx3uVTluTDXxZ1E+fvl4y6+a+bFB+2xktvikSZsEeYmlLhmLQGJ8q18yj+tPZnHwUeJ8ihXa802I5IgX3t0XciPP8p5I6htzQNh3kaI818RkJF1pm0f7yTKl1+dzOWArDXbjChHa818ySq7W5dW8iy819tHRjly36VpIMy70OLaICvZZl6MhSJLf7L5NGWtXedoJZvbolr4M3M4DS6ER+OuqXB3NDN8zNSBhgQqK9nmtvps1A1z8eJlNg3OBHn84lUJnlwI8o3K7gfl0dvHZlzcypdsr4PK9sUCu0LHYt6VWA+vXwzw3apR52glZysM1fS3qd7o4VOQg9L1q700VYJc9rBZvZhlhPlFPP0+uZjXalbyeYYkshXkxYN0JB/ypUML+bMgPyLIm9oVwryJTI+PL/zI11XDzo+DzbQY59Z1rhb4TPUGci3E0IPUZ8+mtpAR5K2tCmHeiqgfF5gPWauNRto/+TpTC/leojXOaSe4qkcTKiG+0gKfc5fWsQb1Pj0IH/EhN1UThLkpqQyvMzHWS1KvwrRq3G8zzKIN6I31wBnnsGJP5VWovIYqr6FZxurR+LSMrSJp2ls4CXc5PQiP2T4Q5mPSdhCXdXk1P3c4sMZdz7DwN1J/CKln5etuIQpJT70yi3gawkVVVlqW/Kkn47S8bKrhVA9CpfmuxF1xSB1mSfZB9BzfbNawnroXVcMOoVCjvlBybaOh06pdO23ceyJNWoxrAZZlfyYreCgGhf4/13cZxvo4Lisl7bMYM7vCSquVDxZzKxjjBGJdWxXgyGKfTdWYB6FQQzlTe/5eQmz/eW7TluzDPlqdJzFz66Ywwa0zaA/ISnhVPouHpJ26tH9qAbbySuBjD8GJ9UjU85ow1a2bEov+LH5zXkyUtaqCdpNFH6EOBuHvXa0mWwh0oYZtwlxIpC+kyGfKuVnJfv2Q7RTNo4TiYXYSJvK/Trr0JYuz9UKu62SL97LI2uFC/5/blww/Va9kcBLGXdXjDJntnSWEeW90u93YpTBvS8mS5TasLWvdk6toVxbdMYR6iaueDeFMjcmYVp8lzvWhy/pLDn+V199mA1nOITxgObdfoghz+0zXhhhTmNcmSAcXFuDcDz23sq90ODcL2/ZguFO+Jl52K7MB2MraVqL0t1AjLPTV3FFVT0e/5+4oO5jOx3ou5uKYINSHFxrCfDjDRiF4FOZ1Ca8Wl9j0OVuokJ9IJzVIqAenjSEUKoeqp6M6ZIL+/bpy83ZMwlJZ1J7HALwxW04PwrxMo8PvqQjzMoJ6aa+OZdUNX+Qx2TnO9SyOxTS6ofLjvZdT9VoQ6UXNa/AHYW4AqY1LUhTmOt8y3Gy7yBtZ0T/Ux3L6u7DublNdDPHF3HSPL1H9srLUKwHHzOj4EszyL4R5mUaH31MW5hqL9LmalaDpXdc65t1Kq5O9y98sNjZKyB11r4d9Vsvkd6lsL12LML9Ep8VzOQhzjcMEWlPTbjTY81N9LLu/9YY7MutSzlsiIl1b0ezJvKhsCPORWl1Owlwjk0AXesXUWL9z9EHPs5mJQFtmEhgzqAZn2aPZwcIwFpjM23/K/1ZWmd4hpzycp5yPl9KuB+u7XLYKrR6o8zEDvzNvMnogvlSvNp3TQCkfCBxGwOYHf7RNdrRE+rCQ/N4tv/rP6h2UldXpN5mNUmaDbn/8VY5UZoU9cHTTc6Mbj3mRBprF+0EzUG70IDk7ZtQe4sKVcaRSUAPobEn2kbLQKJqF9TzWxTkODlYM1Gh+U3mOulz+3Qh2SxeZ8NlSc8eDutX7GFOdNbNPMWEx70ONezYSqK1nE6+NFyV+YqZFHtql7z9mzSWelSr5MqCftP/FjWML+lQDzb+Y29OmBubAfFseEOZthDi/MwHrKv/+WNr+wb/ufHNCN5h747vz4iEXsVgSaCu79w6L4jKnB+JLfBHml+hw7iAC5sfURjf/OCgQ5zcvrOfJt0Vx7TypjZNnD1aV3ZW533TTY+Mbj3Rhbg/EddgQ5nVUONYagT/L8laDgj+2FqDPgE71rsR/vvmmGJu/1mcSd0+Vbe/pdVA3xwficgkhzMs0+N4JgWrQJn9xtsmnP7zWDmsS56ITkBECNfeGyu96MLeevc3eyPKBaMWMMEeo7H2Msi/ibJacTfPKxe9c19WF9Vzo9319zM3fDB+ICLOb2pV/QvoizirJUw1STTRrY5hTqVbW82M5lPX8zlu+cnsgIszealjm6TFx9tiwO8B+qkGqf+ewIGWVjU2tczpuUD0Qc+itIMyrtY7fnROoGnbmU+k+QbT5t0Ux+vQ7ky/2gD0ZhP9Sdtz5nW1KXerMEeZMGkpq2dBGNdeDjBehfFEec3G++uJYBj9s5aPEeaiseBNne2dX0g9EhDmDBpJiFsxf+WH++ip/jboLoNqFL4cu9ioa7+KcKnOEebWm8ftoBCTOpXyV2SzM2AKu8n9qJl2x5brkTnsWZxuETVGcEebkmkFeCa5mavhc/tsF6FPNc76TNmezCKWGZOKsQV2P7pr6gZgUc4S5rln8jUZA/uaRIu+FS6Oa1jWtXi4QjXdXEdtcZ6+zNRYLf5IRZ4S5q1pKuI0JmL9Ze2rcNL4h9Qv1wtSc9tZYLo5FD+jX5WMevi8eiLce0tIkDQhzE0pc0zkB21OjN7M0RNP21kjR99mkItjmVS7LUisEU5lGhzA3qWlccxwC/RkIrHhqAcr4OGCPH4vbGTd6BVoKA7AI8/HrLDFuIFD5KD3uxbAhvYcetu51Lpvtr7KwGTdO3VOnixcIrybZ1W+E2VVxkBiN7N/0iYKs5usULLh9yqTa8tXng/bSu0sDYd6nxnFPZwT6ZjUL5OmrafWG8c6YxgxY+zmPYsa/Me65S8PtLA2EeWPJcSIagUG+vte1TDVLI7ed6Op8mktDvaB39W9Hf09fBb+9M4TZUU0hKXMC1ZQrh6806rJ85NK46TL8mGF/CFWPwN889Vn4yasbCWGOWWOJeyMBWVnjjSfzPHGZsdX8pPJ0OYdYbqQbj9UJYfZYKqQpyMoa9w0DVnOEEtfcZo9WM8IcoS4Q5XYClW+yL9uCfsZxmeuiE5UnVvPnct76DWHeiogLYhGY9s+dEabTfHfbc9sL0uZLsppdzdBAmGOpDvFuJTAN4W7rRbld4FAk2kJsvSBtYP++rfBaDOdUQjhqMbyDg0KYD0ZIAF0R6Kk7w6ZxXXXFNHq4Jz7HDk5mCHP0ukEC0iGgZb2TdFLbUkqn+QqzpkJaL8jd1DlbHu/Jv4/F3FJbIphuCGiXsj66M95683m2Wrp6WUCr4bUUmFxno5aCOjgYhPlghATQJYHFEu0uo3AZdubuDJfCLP/3lZfKgDB7KQnSsZGAy719N6a2pRP5uzNaAtVqMOde5jQjzK2WK4F1QaCXfuZBGHbB0k2YPmdnBAmiC6sZYXZTU0nICwQeXjiX66lTT4NRbUOenfgc1B1MfTwQEea2axzhtU5Aroyy9UATCPBj8CESXaCS8Ph82DrpqSDMXdQ6wmyVQF8HAGW9XbQK0lFgjsvURU8FYXZUWUnKiwTczX19MbUtnBwM8hVmw+N1UFfT5qI/EBHmFhoQQRyFgM+ub4dZt0UPHQYfPWjtpldGT8SaBOiBUaw5fNRDCPNRcRPZ3gRm4WnvexO+MecBwMGJTz+zHhjD2FUGYY5dAsTfiIDXRtwo8QdcJKv57IDbXd+qvHntBRWxwSHMsUuA+CHwMoHhy6fTPSuXgdde0Hlsqghz7BIg/kYENCDjtRE3Sj8XfU1A+zOXXx/1cST2XiUIs496QCq2EFBF9drt3ZLyw07PpvEHog7Lwea7q/2ZN5+OeuZ15JkZCHPU4idyCGwhMMhXmLfkvNenEeZeFz+Zh0B0Ai7np8cedEWYo9dLEgCBXhNw6aLSwORFzFJBmGPSJ24IQAACawggzGugcAgCEIBATAIIc0z6xA0BCEBgDQGEeQ0UDkEAAhCISQBhjkmfuCEAAQisIYAwr4HCIQhA4DgENPvh7DgxpRULwpxWefU2tbHnlfYWfMcZV7lmvbXpvvgQ5n3Jcd9RCcSeV3rUzC5H1tPtTpcRRPo+iRRvFS3CHJM+cUNgC4G+bne6BUv2pxHm7Is4jwziysijHJdz8V1RDJd/8/0zAYT5Mwu+eSYwi7tENhYaPZBcLlmOxeNY8cZ+WSzCfKySJh4I7EFAvvWnPW5L4hYPLz31Cgph9loypGuVwOXqgT78jm25dclY4uN1qtx9l/luEjbC3IQS10QlEPttEhEz/xgx7s6j9vDS07WZdPD2boR5bclw0BOB2G+TiMZilr1/uYjG9oWINROmfOH0UU4hzEfBTCSHEOirL3J2EiaHcPN876IXdO40jdG5I8xOawbJ+kxAA2DF51/9+fYq5CvMnntBHvz6CHN/2nm6Oe3nVLnn/y3LnKfKDT1WSBkBv3lIF8LsoRRIwzYC/ZuRMcvXWrbC9jrwNxv44I4wb5MEzkcl0NvVYSfhLir47iP3+rCddJ/17TEgzNsZcUVcAsO40ceJ/WPIV5jfFMVVHKpbY33+oyxdPBDlg+cDAb8EvHZ5OyU2C+/Lx/Kp0zjiBj6MG/2G2Gd+HoZYzBvKiMPxCSymVHnt8nYHKHc3xiz4tJgdcUeYu2tehHwgAU0XGx4YRIq3W3d6nGLCm6R5MWbgcf6yGzeGcUSYm9QmrolDYOrUsuqSxiCMuww+dtizaRjFTsPa+J1xR5jXlhIHXRAY9E+YNeh364J9B4moXFNOy9Qbd4S5gwpIkIcTWIzcnx4eUkIhzMKvpT4JpXinpMo1Zb5lj2V67407wrxT1eLioxHw2uXtEMDHk3DTYfDxg575zN9g4C9dCHP86koKVgioy1uEQXi7cjjvn5lby+oBjVSAHgf97j3sjbFauRHmVSL8jk5Ak+tH0RNx5AT0wFp2WaYerWWregjzkRsg0b1MQMbymRaVXL98VWZnB+Ff3nycbRJeWMse56O7tJaNPcLcZg0krIMJOB4gOjhvGwJ41IyAmw3n8jjs1Lf8ceC3Z4Yw51H188mF00bcGeBBuJa1/NRZ+JED/rYorPfjzrcsF8Y7z70UhDlyxSX6zwQcDxB9TmSb37QnhpdNc9rMVh2W3FLFwOGD1vZc1oDfTZ1Oj38RZo+l0sM0mW85zPJdXLGmSB814DdaczybQ6+mVXm6m7csa9k9d4Q5m2aQdkY0E8O6vO4acVdUT7QCLmcXhno/Vx6nPEqU36XwZhiEuauWR7iNCchaLjQT4+fGNyR+od6S8Y8UxGFfzFae6v2M972/w/tsFsZNh+G3FjTC3BpKAtqXwCufjXjf7Lx8nxaS/FmWty9flPbZ1/N9jb31fh41C+MqFbIIcyollWk6F6P2Hue4tk7cBp3++KsctR6wowDffFOMZyF87yhJlpTn1FxHCLOzGtSn5PytKC48jtp3UQYmyh8GYdhF2F7CrGbVDMIPXtJTp2MgSzk11xHCXJcef49KQG5IW+E3VqTeurytc6hFOfPBvpH8yr+0Du/QAAfhR497YWzLFsK8jRDnOyFgU6kcdnlbz2sfRNl6Pi6nOkqUU30bDMLcelMkwG0EvHZ5t6V71/N9EeXpLEzExlfPJ2FRtnqGMBsFPkcjUM1v9djlbZkAotwy0ObBPWv+dLKWcp1NzevnA4HjELAur6yr8XFiixiLpsT9nvvsC+2vrLK0aX+eLGWbfTFMbaBvXU3FYl5HhWOtE1iI8kQBe2rIrefTFo9kPyXONr2f93rclKX1UHIRZauUWMytN00CXCXQE1F+tmlZGmyarOY/p982T1mi7GtKnDaD+qB9R3Ka9YIw59RqHOalJ6J8b6vKchKG1aqk6Y2FrejzNpPGeih/Pua3khJhXq2B/G6NgM2+kB/S39zW1nIYQiUMmS+xXgzYjiXKrlwX6qGMcvAnr6uOCPM6Khw7mMB3RXGT+cZE9/JpXucqDFYBZCSfVVt3OnNdSJDfpbIZ0b4NCWHelxz3rSWwaMxjifLbtRekf/BZVvJN7hsR1Vaypp5hJUeoswhzBOi5RikreVgtsx74e5VQK8w1DU6b22f9Kig9WItqt79ZuGyFWTuB2Nzka1nJ43aC8x8Kwuy/jNynsLKS9UJRifJP7hO7XwLnbovH8mG/2/3fVZehZly4KsOB3BYfQrjNeWB1Xe1AmNdR4VhjAp+sZIcv3Gycic0X3ksYblLcBGdzlr48Y4IsEbjWQ/VaZ9y4LfSAsN7JjQS5/DLF/fiFMPejnFvPpRp0UW1ElKcvuVeC7Gm2xSdBfuynINcNFWGuSfC3EYElC+tn+f3y+shKG5yEcc4WcjWvfCrrWDMtJMhePrY457ZyWTyWT14SFTMdCHNM+gnFvSTI164srMMZPkoUxhKFcZmplWZl9yqEK72U4Frzyr/38kC1ZdSa4XKb6tach1e9zSEgzJvZcEYE1KjNZXEjC+sqK0HWMl7trTiWKNzlWtDVlLep3nOnslMeT51YyDbDYqxNesY5zwE/tE4hzIcSzPT+xTxW6/JeerGwDkVtFtpUojCdW8dZdpk/ibG9eHSmwTwf7qZnpeVOD8K7nB+Eh9bP5fsR5mUaPf9e+R9DsJ3D7H8/I/SHlcu9ust3EuO7HEf4rcw+hjAcTMNQIvxW5RYQ48MqjIe7EWYPpRAxDZWFpYatBn0l/+N5xKS0FfWj8jKRdTaRYJkYZ2UZ2/REPWQuFkI8VJmdVkaxA8vYeiR6CE709y7nAdS2KupL4SDML9HJ8NxaCyvtfFo3eTKTEGuAa5KL39IG7NQ4LxYifCEruFAxXWq+8dwgdiTESpc9BCe5PQRjNguEOSb9juNeuCYKteELNeihoruUheWmYe+Z/Xtl4EH3PizEoNwznOi3WfmoOM7s/6qMphLfuQBf6GFTDdZV+lv9Ez251hN50HRCYz/RLJYHhLi7MkGYu2N7lJCta7uIaGgNXI3nQr8L/X9uImyfxZ/5j3T+fVRSy4G6xkp/eSIh8G4NL5VFMEtXaT4z3LOpymQw/66fVj6V/74un+oa+8eHAFtK7lVpSolwqe+IsBE58gdhPjLwfaKrlj2vs6psClSiqmscpEO/KflP+vKg70/6Xv314p9cFlold2hpts+i9zH/oV5I/WW5LExjPxWNH8Gtk/qoL6US+GQWsNJZKoklVnCNJ/5fhDl+GYRi4U9UAynUQApZWJ+7tEviWzV0XeD4c/9F2haCa8eU9kp07XsM4a0ZL9JSuQ7q70qcWbFBaM2t8L19t8+y0M6PuP33Je6l8lVayhFet+VHwiAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEILAngf8HcTcftGlqIF8AAAAASUVORK5CYII="/>
                    </defs>
                  </svg>
                  Beyond Brands
                </div>
                <v-card-title class="py-0 px-0 mb-2">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#3D7C46"/>
                  </svg>
                  <p class="mb-0 ml-2">Ready to interview</p>
                </v-card-title>
              </div>
              <div class="control__option d-flex flex-column mt-9">
                <button class="d-flex align-center py-2 px-4 mb-4">
                  <icon class="mr-3" icon-name="download"/>
                  Download CV
                </button>
                <button class="d-flex align-center py-2 px-4 mb-4">
                  <icon class="mr-3" icon-name="copy"/>
                  Copy link
                </button>
                <button class="d-flex align-center py-2 px-4 mb-4">
                  <icon class="mr-3" icon-name="edit"/>
                  Edit
                </button>
                <button class="d-flex align-center py-2 px-4 mb-4 delete">
                  <icon class="mr-3" icon-name="delete"/>
                  Delete
                </button>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="account__tab">
      <v-tabs v-model="tabs" centered>
        <v-tab>Information</v-tab>
        <v-tab>Request</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <div class="limit__container mx-auto">
              <div class="register__account__form dev__account">
                <v-row class="px-3 py-3">
                  <div class="light__card no-shadow border-radius-8 v-picker--full-width">
                    <v-container class="v__container">
                      <h2 class="form__title mb-5">Technology stack</h2>
                      <div class="d-flex flex-wrap mt-5">
                        <div class="stack">Java</div>
                        <div class="stack">C++</div>
                        <div class="stack">Java ME</div>
                        <div class="stack">Kotlin</div>
                      </div>
                    </v-container>
                  </div>
                </v-row>
                <v-row class="px-3 py-3">
                  <div class="light__card no-shadow border-radius-8 v-picker--full-width">
                    <v-container class="v__container">
                      <h2 class="form__title mb-5">Work experience</h2>
                      <ul class="experience__list">
                        <li class="experience__item" v-for="item in 4" :key="item">
                          <div class="item__timeLine">
                            <div class="d-flex align-center justify-center timeLineParent">
                              <div class="timeLineChild"></div>
                            </div>
                            <div class="doted__line"></div>
                          </div>
                          <div class="item__content">
                            <div class="content__title">
                              Приложение для мониторинга рекламных кампаний в соц сетях
                            </div>
                            <div class="d-flex detailed__info">
                              <div class="time d-flex align-center">
                                <svg class="mr-3" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M17 7.4H1M12.5556 1V4.2M5.44444 1V4.2M5.26667 17H12.7333C14.2268 17 14.9735 17 15.544 16.7384C16.0457 16.5083 16.4537 16.1412 16.7094 15.6896C17 15.1762 17 14.5041 17 13.16V6.44C17 5.09587 17 4.42381 16.7094 3.91042C16.4537 3.45883 16.0457 3.09168 15.544 2.86158C14.9735 2.6 14.2268 2.6 12.7333 2.6H5.26667C3.77319 2.6 3.02646 2.6 2.45603 2.86158C1.95426 3.09168 1.54631 3.45883 1.29065 3.91042C1 4.42381 1 5.09587 1 6.44V13.16C1 14.5041 1 15.1762 1.29065 15.6896C1.54631 16.1412 1.95426 16.5083 2.45603 16.7384C3.02646 17 3.77319 17 5.26667 17Z"
                                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                4 months, 2022
                              </div>
                              <div class="position">
                                Flutter developer
                              </div>
                              <div class="comp_name">
                                Company Name
                              </div>
                            </div>
                            <div class="description">
                              Mобильное приложение для продажи машин на запчасти, задачи: разработка приложения в
                              одиночку и
                              потом в команде, сейчас в релизе
                            </div>
                            <div>
                              <div class="stack">
                                Java
                              </div>
                              <div class="stack">
                                Java ME
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </v-container>
                  </div>
                </v-row>
              </div>
            </div>
            <div class="limit__container mt-8 mx-auto d-flex align-center justify-space-between review">
              <div class="d-flex">
                <h1>Reviews</h1>
                <div class="d-flex arrows">
                  <div @click="showPrev" class="mr-2">
                    <icon class="arrow left" icon-name="left-arrow"></icon>
                  </div>
                  <div @click="showNext">
                    <icon class="arrow" icon-name="right-arrow"></icon>
                  </div>
                </div>
              </div>
              <div class="show__all_review">
                See all
              </div>
            </div>
            <FeedbackSlider ref="carousel" :title="'Reviews'"/>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <div class="limit__container mx-auto">
              <v-row class="px-3 py-3" v-for="item in 8" :key="item">
                <div class="light__card no-shadow border-radius-8 v-picker--full-width">
                  <v-container class="v__container py-6 px-6">
                    <v-row class="request__header">
                      <v-col cols="2">
                        <div class="employ__avatar d-flex align-center">
                          <img style="width: 40px; height: 40px; object-fit: cover" src="@/static/user1.png"
                               class="rounded-circle" alt="">
                          <div class="ml-2 d-flex flex-column ">
                            <p class="mb-0 pb-1">Art-er</p>
                            <span>3 month </span>
                          </div>
                        </div>
                      </v-col>
                      <v-col cols="2">
                        <span>Start</span>
                        <p>01.08.2022</p>
                      </v-col>
                      <v-col cols="2">
                        <span>Time</span>
                        <p>2 months</p>
                      </v-col>
                      <v-col cols="2">
                        <span>Payment</span>
                        <p>$50.00/hr</p>
                      </v-col>
                    </v-row>
                    <div class="main__text mt-6 mb-6">
                      Adaptive and cross-browser web interface layout. Customizing functionality (buttons, sliders,
                      forms, galleries and other elements) and writing scripts. Adaptive and cross-browser web interface
                      layout. Customizing functionality (buttons, sliders, forms, galleries and other elements) and
                      writing scripts.
                    </div>
                    <button class="btn btn-primary py-2 px-8">
                      Approve
                    </button>
                  </v-container>
                </div>
              </v-row>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>
<script>
import GoBack from "@/components/utils/GoBack";
import Icon from "@/components/Icons/Icon";
import FeedbackSlider from "@/components/FeedbackSlider";

export default {
  name: "_developer",
  auth: false,
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  components: {
    GoBack,
    Icon,
    FeedbackSlider
  },
  data() {
    return {
      tabs: null,
    }
  },
  mounted() {
  },
  computed: {},
  methods: {
    showPrev() {
      this.$refs.carousel.$children[0].prev()
    },
    showNext() {
      this.$refs.carousel.$children[0].next()
    },
  },
  watch: {},
}
</script>
<style lang="scss">
.review {
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    margin-right: 24px;
    color: #131313;

  }

  svg {
    height: 32px !important;
    width: 32px !important;
  }

  .show__all_review {
    font-weight: 500;
    font-size: 16px;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #00489D;
  }
}
</style>
