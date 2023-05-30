import React from 'react';
import Navigation from './Navigation';



export default function Inicio(){
    return(
 <div>
 <Navigation></Navigation>
<main>
<section class="py-2 text-center container">
  <div class="row py-lg-4">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Bienvenido a Conference Task Management</h1>
      <p class="lead text-muted">Acá puedes encontrar las mejores opciones para realizar tus conferencias o tener reuniones empresariales.
      Tenemos planes que se ajustan a tu medida desde Start-UP hasta eventos corporativos</p>
      <p>
        <a href="/cotizacion" class="btn btn-primary my-2">Cotiza con nostros</a>
        <a href="/conferencias" class="btn btn-secondary my-2">Ir a eventos de conferencia</a>
      </p>
    </div>
  </div>
</section>

<div class="album py-5 bg-light">
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhUTEhMWFhUXFRYXGBgXGRoYHRUXFhUXFxcXFxcZHiggGBolHRcXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS8tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEUQAAIBAgQCBwUFBAgGAwEAAAECEQADBBIhMQVBBhMiUWFxkTJSgaHRFEKxwfAVI5LhBxYzYnKistIkQ1NjgvGTwtM0/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EADQRAAEDAgMGBgEDBAMBAAAAAAEAAhEDIQQSMRNBUWFx8CKBkaGx0cEFMuEUFULxI1KSYv/aAAwDAQACEQMRAD8AGscej+0T4of/AKn60/4Zj0cdh8w9CPMGqhiLJUwRFFdH7uW9l5Mh9VIj8TXmn0G6hdprjoVc84Iik963laDTO3FD8St9kHuNLdTkWTBZRInhT/gFhRmLE6giAxGh8jVWtX43o63emrw1MZpm4VVBLYU/EsNlaOQOhoIWj3/qIopmnnUS3VB1O3hRVKVamYbcKAtOqMwfA711SyBSB3mJ2Ok0J+z7uYr1ZJB5R3mrFwzjVtBHWAfAj8qgxOPUtmV1+BFFUOVgO/f3uSmyXEbtyr12wy6MjKfFT3VxpVjsv1jDMZqy3mRrWQqIjuqUP+UOJgRp3uVVHZIsvNZrYYjafhR2NwwViIEeVHcE4Qlxhn0XwJE+lJa/O7LF01zcomUut4i7aJZLzaxpM7ACdfKpLvHrzCGYN5gflTHpFwS3ag2i0cwTMetV/qNd6OqQxxY720QsAeA5oXQxOslasfB+k9u0INth5QfzFAWejNxrRuB0/wAJkE+gNJntMO6qaNkQ4WO5RwFQFuqvT9JcNcYEsRHep/KaZXeN2HUhbqGRtmA+RrzK1YdjCqSe4an0Fc3UZTDKwI3BBEetPbiHw64vrbVJOGbbWy9O4XbtqjbNO50M1SeOYVRcMKI8hSMXY2MVjYhvePxM/jSaoLmNaABGiZTblcXEzKc8M4Mt1og+YMU14x0QS0gZLr+TAH8Iqt4PjN20ZVh8QDTC70suuIdUI8JH5moxuWm4G7jpyUfmLwRpvWrnRm4LfWZ0juMg/nQ1vo/iGUstvMBuQR+Zmi/6zSMrIY8DNOsD0tsKmXtL5r9CaqiJd47CPMn3VPLgLC6o97DsphlIPiKipvj8UrsSGEE+X4036NYO0zZrmVgPumCPiOdAx5cQ0hMcABKqNZVuucItPfPZC25mBp8BG1BYvgls3SEbJbESzHRRtz31qxVaTHOFUfEquzW5o/iuAS25W3cFxdIYRr6Gger7/lREgGFMpXE13bU8vpUgWNh61sqTuaEuRBiyT74rKzJWUCKEx41w4S0j+VUfjt17ADoYZSdfAgivUeNpoTXmPTZf3Z8/yNdamBmgrK4+AlXrD4e6qK4PWAqpKtAYSBOVhofI+tEK6XlZVMON1bRh5ju8RIovA/2dv/Av+kVNxDh9q5ZV9nB0I0KmSNGGoNerr4DDOMZALxYR8LmNxdRupVZu2SpgiDW7KVNjcabKjrj1iZguYgBlnmdgfMQfOh3xKHtW3jz1n415zG/pRovBDgeUgO9Jg+V+S6lDEioJTC3b8/Wj73BFZM4c5uYgQaQ2+IMP5UUvGXiNPSs5c3QH1TCCUVhuCFgT1gBHIjf4z5+tLrmFZTBj9RRK8XPcK4XFhyeURz76zuL9UQaFzhMDcdgqCSfGPmaIxFjEWWyNnU9wafSDBorht/IZBFF43F5iCdxSX1PDzUynNySTEteU9sOD/eH8qkscWu2u4eami72IzRPKu+I43OgU8tqSKguYRFhiEJiOkD3BDKvwkfWh1xQGUlTrP4xXNu1JovAcGfrGZ7qPZOaLfVgMk+zDjWB86gy1bn5N1DLIhFf1iGXKA368qUXb6kzNXK1wbC9X2k7Ub5mHymKAtcAsFGzFg3KDt6jWnPoTEnd6cktlUCYHslfCsYiGcwnzrL+Jl8wM0rv4QAkSaZ8P6Mm7bZzdCRsCJn4zpWZtIVPCDxTXOyeIozCr1zjrNQO+puk1iyQuS2ike6oE+cUhscNuwStwLHiwnyipcPwvFXUZ1Mhd5bfyzb0VMeEsYQZ9ULrODjYBQYXAh2AAqxY3oxYS2DmfNz1EfARVYs4u9bOkT5A0c/EMU6FjaJUbsEaB5kaUTC7K6Lki3Lmo+5G4ITEcPAaEYnzH0ozF9Gbtuz1pZI93WdfhHzobBYpwesNolQdTJAB84o3ivHTdVVWVAmRIM91Sm+Ac1zu+1HNJIy+aQNaNSjAXcnWdWwSYzRpPnUgaDO9N7/SF3t9Uypl2EAj86ttQQc3krLNISeyzL/zGHkSKmuYtiMpYkTMeVE3OGsidZc7K6b767CBzpbdvDlr8qWQZuEYjcus1dAUsv8WtroWEjkNYPwoO7x5eSsfOAKMUXu0CEvaN6esQK4Nyqy/GLh9kKvz/AJfKh7mJuN7Tt6x8hTRhnb0BqhWvr/EVlU3qh3Vuj/phx79UG1PBev8AFtjXmvTYfuvj+Rr0niOxrzvpqv7v/wAh+BrUw+MIH/sK9Q4Lm6q3GUiF0+8vZEsIg+lH37Cv7Qk/5hO0kCfVTSzhtteqTNHsLpsRoOcgfOimLACG05BxmHwOh9Jr2brvOUwuK9sFUrp1YK2DtBdcpkEET3iqClwrtI8jFeh9PEHUEBcpzJIBJB15TqPI1578DXH/AFUzWE/9R8lbcKIZ5/SIt8VuL96fMfSi7XHG5qD5GlcVl2x2Zrkmmw2IWoOcNE/sccSRnDAc4AJjw1qT9q2zIzaHv0pfcwAjel96wRSQym7Qphc4aqxLiLZ2YfAipluDkzetVIpWBKs4cn/L2VCpyVwF5v8AqN6/zrsYl/f+QqngsPvH5/Wti+4++3qfrSjhDxHp/CLa8vdXNMbcH3l+I/lRNvjV0e4fgfrVGGMue+a7XHXfe+S/SgOFPJXtRzV+XpHd5op8jH51s9ImO9s/Bv5VRv2peAidJnYb7Vr9sXe5fQ/WhOGdy9VedquDcTUmSjUfa6RIFy9ofD6VRBxl/dX51g423uj1NB/Su3fKLajf8K7JxNCfa+R+lHP0gCKETtAjWDEfKvO/203uD1NbXjbe4PU/ShGEe0yPkKGq06/CtwxSlpIMTsIqzL0ntdT1QDARGw/I15Z+3H90fOtNxu53L6H60bMPUZOW0iFTn03ar0I8SV06lOZ2g70uxeGFvQkT3VTV43eGxA8pH51G/Fbx1zn0H50tuCeN6LbNVpd/CtYXpBZsPJAZhsCTCnyA1NVI426d3b1j8KhC1oZhY/cUDqsiytvGemPX5cwMLMBRA15nMdTSW/xkkEKsHvJ28YpaEozBYOe0duXjTNk2ZN0AcdAgltmuhbpocPURs0cqoQYSoL2MRDBmfAUxNqkOLP7xh5j/ADD6UdNocbpdRxaJCl/ay+63y+tZUShPdB+FZTsjOB9UnaO4+y9vxlUfpdZlI/vD8DVzvvOxmq7xq3m0NYs0OBW2JEKPC9OkChbllhAAlGDbCJgxHrTvDdMMG40fq2jcymvjPZ+dee4jCRQT4auwz9SqDW/fJZHUQV6B0qvi5hpVlYZl1XLrr3rvVHdK6w9qANKlIb7rwCIYRuJB/KsuJxW3fnIi0ceP2m06YAhQLU6AEQQD8KiZa6RqzkyjRhuaUHiHA1O1adpEVDiVzKRMT8aFjLqOJhRPcXvFakd9APw1/fB+BplbVRZKH2shAPLNBj4VtYxh/wAllfUqN0ZKjrcUqOCuTOny5+ERWJhbo7vUVWQf9gizuH+KaqtGYe2JqXotYtBScQy5gWgNrOmlILFrERs0x7386Gph4aDmF1VPES4jIbcteisdxBFL71uhcKuILAN1gHjMbd9T8UtumXKSZGsax50tmFcBIcPVE7EjNlLTPRcRWopcuNfmD/DUtnH++D8NPypgw7yYCm3ajYrcUAcaS0LzJjy5UUFuaTAB/D4U2ngMRVsxs/HqhdiqTdTClisigrOJdmgAfGrPieCG3hFxDkyxTQCR2v130sYaoZ5KOxVNsTvMBKFtztUnUVv7fbVkyC5lkZw2STtOUjbnvXX7STrZyubczkJUGOQLAUrYP4Jm2Yt2sLNHW8AvMVNesTh2vWyUPXKirIMKwJIkjXzpZgHu3RAZi0A/qKYcDVtpfvgkjHUoJvYxu+02Th6+7RAsQIFL8bhLqFVm6ZWSQWPfpp5Uufh147reO/vmtR/RawEue0ef8K2Y6m79rSnbpFB3LqDdlHxFJrPA8QQZs3NtyI5xsdZ8K6Tgl4QDZbbUmAB5ya57aDT+53x9p76zho2fX6TdloX7CkzlBJ79fxpiUrjJSAU0gFC9Qvuj0FaorLWUWZVAVSMqeySPIkfhXY4jeXa6/wAWJ/GaZY/hxAzhkO8gGSsH72ka7iCaU3lj501rg5W9haiBxy/zKt5qPyis/b1zmqehH50M9oqQGEHu86y1Zk6Cf/dHDeCVDuKKHHm52x6n6VIOO99s/Bv5VA+DJMZSTpoBO5AGg8SB8RRfRrhouXTKhwq5gG2LSIBHPSdDp30P/GBJCgDy7KCuf20vNG+X1rX7VTuYfD+dF8Z4YtrEFQUgw0DZSd1A5we7kRtXPEMII0KNvsIP41HNayxB9VYBIJBQ/wC07fefQ1n7Qtn73yP0pY9nuqfAWQWWYiefxqyGgShBcTCL+2J74rPtKe+vrTzi6o9oAIJVeca+IgabVULqROlDScHjgmVWFh4pt1i+8vqK0HHePWo+DcFtsrNcBOh8BOnd5/MUrWyNB5iilpJA3Kix7Whxi/d7J4p8vWuxPdQjXHu9X1ioy2gFHYCwsga5YzHxM0b0kwdpSGsrlDCCIjuO35iluLQ4N4ohTfkzH07CyT3VwSe6kSoe8+pq1cI4VZa0c5frCBl7T7kwNtBPjVVMrBJ+FKbXPMBAGa1FC4PCl7mXrGUDWSSdo0idd6jw6Oz5c5Gsczz5UWUXuqh0Awj2RQBEzzBG2ukHnpWKprjieCa0AVuk6baUCmNuja4fRfpVNbmEgqnS0wQnuHwnMj5GmVsx3+hpJgMRfdYFwAzMkLtG2UL36zUN7imIQwbgP/iv0oCwkxPyiBgTCsoPn6GpUaOZ+dVNOkF/ky/wii14xiiJ7H8I+tCaJ3wiFQFWdcQfeb5119sPvN86qt/pJeBAUKIUZsy7t94iDovcKgPSW/8A9v8AhP8AuqtgeAU2oVwbFn3m/wA1cNiO8n0P0qpf1jxHdb/hP+6sPSa/3W/4T/uqxhzwCrbBWrrR4+h+lcm4O4/wt9KreJ6TXMx6sKV5FgZ212PfUQ6TXvdt+h+tEKLlDVarK7Dub+E/Soy3gfQ1XT0mve7b9D9a0OkV4kDLb1IGx5/Gr2L9yHaNVhz/AN1vSspR+2Ln/Usfw3v9lZV7F/L1Crat7BVosYPC9W4a1d3Kly8EGI0E5TvtB+tc4ng7eGu27wPW2us/s3ENlHvaZTz7uWmtGWr7XWBYEK2pMCNo2G+ux8asuB6LJjrWc3TA7MQIBgagSe/es1KadQXPMa/KW1taJOnNILtvCYq4t9LdxFjZSqZmUmCRDRB7jJgbVBewKJBW2Dod9fjrV0wX9HxtqFW/IE7p3meTUNxnokApDYvKwHsooztI0EGYB74plV1Rz5/x/HkujSdQbTgXcYnr56Ko4e3dDPetFLRUToypHgqtvzpXwu9cW+zIRme28kgEEMRm0GxOvLvovG4NFCnq75KvJe5nPPQBQsd0jvp3w3j6YovYu9Va7IYO5NsSCNJcxPh51paKtNucCfx8z7LI59Oo8MNhPsoeG2LSjNeDs/uplFvYQCCJOo1qK3h0zM9y8qIFyLnWDL2yJBRYkETJ11G9F4zD4e0pJv22y6wHBzAGIGUyZ2kVT8TxF3zRbhCxgZSdAdNxNJo034gk+Rt1T69WlRADbnr016q3JhrLrcRlt5nXW8WuKpYBQmREQwBBIDATrPdWYDAYZU6pjLhpNyT1bSpkiRmUgGB2TqPHRfwNkvW8926qHMQVLhSQI11Ok0TxjEYe0hKqMzK2QLiBdIIIgsEJAGp0MTVNzFxZaQbi/fnqicaLWh8m44jvy0RAwmGD3Bce4VJAU2YYIjSWPbIOYTA0gRJmYCfCcHW46rcdQgDTqELSSdXMgchJBilQ440KlzsKGzHLJZtOcmCKtQ4SFyM1z2oIGuvgW2BoqmaiQT99/wAoaRpVpF+98CFDbwarcW28JbjMXtsLwJzbEL8NIFCYTgrBriWkt3xAIZ4twJ2QPBzannyo83TmYXkVBEWymgOpHxiBRXDsEp1LG4sbKQupPeRv4UnawASBB6/IRhrXTcyOnxv0SN+HIqW7dwvbJuAM5XsgCMwEE5o07UwZ2FNOIcKtXmizcMqpzAwVI0CsGJHa2zDvmO6geuRsT1bo6WsxUlnA7Shtc/s7iARNScexDWjlwyXWkRnSbi76w49qQYiO+tQp5o1DteIM753RGkEpBqNE8PObbo3zxsAl1rA2erdmLDq+ySpBbMHUlmtkzlyFtpAMa7yZdsKis1m8XAVGGZcp5MCYJ5ggDypFir1+MhDLLAlT2dYI2Ov3tq0MS3V5E1YsS2VozLlEDXeCD609+HMLM3EAHTvyVstXGjr1sJ1ka3DII5Tl2LHXXfxobE8KudcSmrtNx41Cr7RudiexDCT3nuNNZZsFbuWytxiCkAbiWWVOYbR8jSWxcxBulLfWq9sZdbhB1CsRvAX2THl3VjFPKXEmwt1E8DMf7E2WoFroA781KeGXbzrZz2yOTZth7RHaAkxy76S4bh7PcyCEJDMDd7AKr5/ePd4Gi8fxbEYRkU7hi0QrZXM/egzMzE/hUty1nIL2wHlocFlaWOY6TBjWBGgNHAptl2/h/tRzc7iGbuP4speHk2oUBSSYBBnMQQTAiYoPpFgmW48DbY6duSACAD+fI0ba4YlsM3WEvKsv7lyqZYMHK2pOkg+FAcSdQim4gZiMpuE5WJnkk7RM6b1exy1NZ48VTnzTuI4cOHtwQB4e9q4yXV1GXYb6DVfnr4U6uWurBBVdApaATEgkhpG6xr56VpL8xrrEkmdI7yD+oqHiOIcuBkhG9rKzEEhfvFiTEAaT3UdSk4HLUFzwPLh/PwqaGtEsMjp5JRiva0EA8o/A7iolApr9m7BGVmcLppOg2mATAH6FZw9AVViAh00M0Uf4/Q+Y9EGzM+/H47KhtW1j2gPWgsTAPrr31ZsW/VrF5BknUHMuadoaPwpXewFtyCgYKF0BZXhY74DHUE6k7+tNpODocDJ0tPx05qPuPDHqEpVPGpLdtY3p1bwkKFt2Q/NmfRp55DPLwmubVhbjGciSezJMRB1Zsu+g17zVTzhVs3AxE9LpNcReRrixallBMCR8tab8UwttUAUdY5dhmQACBtMHaGgEjWCdNqWNhXUgFWnfblTKbXESBPulvABhE2k0HlWVPkA0rdUqXr/D+hNhB2wzn+8ZG87DTemuMuWMHZe6UyogBOVRJkgCB5kUyZqrH9IlwfYL0kD+zG//AHUrMGAWAujL3OPiKqnEOmlt7hfrr1sMQAoLgDSAIUxyoLiPH8M8/wDENm07ZR3MD/HVKxhJjKwOuuo/OhLlo949afTwM+J2bvlClTFR4WgR3vlXyxxzAgEXGF0aaNbI1HOI1O3pRVnEYFxmWwsCQT1cRHKTEeVeXayIpnhbrAjMw3kmdwRqIAov7eypUBJdG+CB6WhC3GENNhO7X7Vxx2K4cGDPlVYjSxmk6nUzI513guI8MeQqdYVUsxFk6KN2IGijUa+NVLFXVIMMp8IOuvisU74Vwo9ULi3Mme2M/ZBhWWSNTQ4vCYeiQM5AOhn6bJTKNerVJMAnf2XJpiuL8KCgPZtgHUTbPxIGWqX0kxtkuPspXqxLdm2EykmMumraAamuMZjBbeLdwuBsWCxP90R+NBG6rbxM1eGwopkPk9D/AKkFJr18/ht35xCZdF8Raa/lxKq6ssCVzQ+ZYgeorvpHjBexBTDBmtoiogAOiqBPZ+6ASR3aClIZVOnr+frTvhHBrV9CwdwZ7YldCNZ9namvyUnms6dI6eWlxZSkH1m7Jscev3e6UXMPeA1XbkxEehO1WrH9ILeHsD7JbVM2rjLAVyFgx7LbEelQ3eitoKWzvpGmZcxnuGTX+ddYfo4rjKbl4AAQMywf8m4is9WvTflqEGB0i/Ea+ydSoVGFzLSfW19YhJLRdu0pN2dSQGAk6sDPcZHjFNuj+Pa25W47Ih17IDMG00AJgAjQnypg3Qu1l1d4UExmHiT9yqQl6DDaQYI7jTmVqeIBAGnFJqUqlAglXrGce4e2Ypbv9cTBL2bbQNswdnB0G0idKpaqqsSpjuB2A56zPyp9wDhi4sXCyuVUgAgmJiSPgCKcWuhlr3H9W+tJ/qcPh3Ftwd6cMPWrMDpEc7fjfz1UXAuKC3ZyXLV12MxkbLlUgRDZT4mjf29ZWR9muqckDPcLa6nO3ZzPy5jnT/FYrEDVEDEnUEsvpLfKo/2NaxHbxanOJURIlZLcmPNjQf1WDLZdT1/+gTN9QSLcUw0sQ0w15tyPyqeOPWx2bgGXcKBJ3mYAgGiX6R4izOTDKlowBmw+UsYCjW4pUHTlv3VYL/RPCTK2j8vwmqJ0ux144hxf7YUgD3R2QdAOeu/0o6eJpYp2Vo0vf8XSXUn0G5p15fP4RF/pGVzG4gFztLlCrbVVIgyqBZbU76flX2v5jmckyZ7ROpndjVv/AKOuHLirlzMLZROrkXDGhYyFYg8g1encQ6L4PMbquLXIqCgQE9waI274p+fISGt94mfJKybTKXO15TEea8asYO603ng2jJUh1IzAREKxynvBg7UWLrNKtoGEGDsR7JB5xG1RdMuMlbr2LZUqjRmXXPpuCCRGvfSjC499DpOvjv8ArlSjTq1PGRB6z7pu0pU/ACSN5hXM2GT/APn3yiXB1JI1mRpGwA8+VBJw3MDrqvtAamQNQJipeBdI8LZtRiOs63MQMqZwy6ETLCCJI9KK/rcoZTast2tZMACOZA/DwrPUGKc/Llkk2NrnfqefL2Wuk6gG5gY5Xt6ae/up+GcDzAZkc2V7TkBpywZECCDTI8Bw3UlrYULlzqHaCQYMlyZUROkHypTxDpJiGTPaeyGJAIe0CQDzWZk7UixGMNwD7Rfd8ogWx7I0OsbDlTW4bEUnEGWnXUfiR7pb69J99Rp3In0CFu8Qa42VFACHfUkxzk6/Gi7Uu2RWWT2ss899vHWl9riKgylsSDIZjmM/CB8Io+7auXTYVlYNcflpOdhppsPP1rqUjkBe4SI8XTWZPE62XPc4k2PRcspOug8IrYDDb5GKedHLDYtrxgdWjAKuwzGZ210AA+NEcR4alqc4y+RLbmB2QpbeuY5ufEmmHDNrfwiTcgdN2k9bLpsrgUw4gx66Wk9VWMpO81lE3MKJPbb/AOG9/srK1/29299++aScbT3Dv0XuheqP/Srcf7KioCQ94BgBMhUd/wAVB+FWx3NVT+kEM2FhTDddaCtOqlnyggjb2o8ia59J4FVpOkj5S3t8BheR1u1aLEKoLMdgBJPwq5XuiuMHtW8O5741PmcomgDwfGNmQW+rXY5FyBviBLCu0MVh4nP36rHsqnBU0KRcy7mYjfU7Dz/OinQqSGBBG4OhHmKMxvC7lp1sMq5nAgRzZiFkkTuKZvgb6sbYYOEC63EJEkTCllYmPzpdOvTGv2oabuCSYeyXYBVLd4Hdz8vOnXSrpA9yyttB1aDRgp9oD2Z0k7fIULikxE5MykaFhb0CiYlgFH51z1sH/wBUFfExAYbb9L8OMb06jSzNdOqW4EI6Pb+zvcvMvZfMQtoGCGCDfuljGu1YnCLw/wCX/mT82ojil/MR/hHr/KaXGpTfIkj3/hLqNAdHBFngt3fKB/5p9ac9AuL3MBfZyB+8RrcOeyNQwY5T2toH+I1WY8v15VPbxrJAABWdVMiZ3EjUVKhJENt5qqZaHS5XR/6Q7rXAVsosH2sxVVI5kHYeFNm/pQcgg9RruAlwj5xNef8AEMQjIMjOWLElW+4IgDbXWde6KXovMzH68KRSoMaDDYk3ufsJtWu5xAmY5N+irxe6biCAC0z90gaiObTVV4rhrReUuHUCQEOhgcyRNRC+o9lfjz9a4a8TRU8PTpmWCOiqpiH1BDzKuHR/pzcwNhbFtcqiSewpzM3tGW3rLvTssZgg/wB22gHoGAqpW8WRUTjMZj0q3Umu/cJ63+ZVNrPb+0x5D6Vys9Krr7PoDqCqqYKmI1M6igE6Y3hpcZi3PIVUA+Eq0+dK8BiQoa3kQm5EF9hAII2mdZEcxSsLr/6pbcJTbJyCN1gftMdi6haBJnfdWr+tdw/evfxp+VuhblwXe1cDAHcHtMx96YA/W1Jlvm2ZFSjGk760ewYNGgdAB8IRiH73E9b/ACm2CxK23U4dGURlZSwMkn240gxpz0ovGXgJDMTm0jXWdIFVz7RB/n/KirGLvAh7YY5dyBMDnJ3Aidorfh676bDTYJm+/hv4hIf4jJKFxHC2DZgvZnVswIJ2jYQfOpGTJqyQZ2I0+m2tM7AxNxCAjQZylkdjDc1bKR4TvHhS3H8Nu2GUXeYMayDl/MZh60htOo1skGBv+FbnNJtvRVri10kANHKFCr/pArMQtwsLhRyOT5zr394ofD2vvbAfrTvoezjXWSpYCW0Bj4UNJ4zyZMcDv8/4VumITZLdu8T1l1bZEQtwBgeZOsfIg6UsCmCfSNtTy+FQYi/1jCR2t5JJnTnRtjDP98rBWNGhlnu909+mu1NquNS7W39+XJC0Qo1sMBouYnXTw+In4UbwtruZbaX2UZM5DAwukwJ0M8jIGu9M+G8PtraNy47hYyTkFxDCyqgFRB7p0133pdhmtqZS2Q0Rm6x1P+Qj01rPTNWXZDBFrceo4cijLRYleqdGeGLh7P7sF+s/eMzRLFgNdNAI5Cq/0l4TefG9cwCILSKGBk9i6txtNxIkTtrRXA7d2wshy4KIApZsqACTlBkEydye6q70s4219+qy5QhgzElu4kE6Cdp3JoKX6ZWp1hVqmRM6kHjwt6zEppxDHU8jf4Vn+34f3m/y/wD51lUF+GXfum3GkRcTu863Xbh/B3/p6yyOXoPpe3mq504ugYdddr+HPwF5Zp1cYnlQWJwguCHUETMHUSNtK8aXAFdWLIs4xf1NQ3OI2xzFL7nCYHZ7I7gTHpQbcJM66/OlOeihV3pIrvxC1iEtlrdsWwSCmpVmYwJn73yNWvD8QsMYC6+IA/Oof2aP0KlscPQbgegq3VMwAO6yjWQTzWYrEYcK5Ftc2Q6hQTsY1515STA+H5V6rjMPbW25E+w3+k15Td2rRhrz5K3WQN22RHjJ9WNcD9fqan4jdyqhjdBWsLc7MwDPeJrsUgXrmVW5XEKHTx/XmTUGIYTTQXo+4n8IP41rPrOVJ78i/SnClz9v5S0osONqnzaHb0FF44lkIJmIOp2ju+E0Lk7MDVj6RQubBhRQZ66Bo22sACuxRbPmoggpOwJNb6yN9D3UwUUBiLILmPDfy1qnsgKLlrs1tdBPLvrdrh7MGhSY7gdO6ug2mX3dI7qUBdEdEKzFjpRC4dh3GtYZQTMbD8aMWnNaChUSW3OnZHkAPwqTE4B1BceyAPnpJHITRNkc6OwxQpcQhHdwi5HLK6O2iOusMAGUxEQBtrNupTZuqsEb0Hg+J3bahVc/rkAdK7uYt7hBchiNpVTHlIofE4V7bQ6lT48/I8/hUlgbmDp3U7M6MhPkqAGqPt8IXElS10gyEA6t3AOpAzDQE66UfhehwVhmu5gG7UCNCOWYGD4EGfCrPwTgGHuWLT5bbMUBNwSCW3MOpVtDMT3Vz0pwjW+HlnacRbCAXgTn1uqNW3IgxB0riU8fTdWh+YgmNQNbcJPMSCtbsO4NkRpO/wC/wVW+k3C7VhENvcsdG3ED2lCwN4B050gsrJprZxzHTEBbxKAAMMpAPakFdidNY5Cnp6B3zoqJbkbtczZeWwXU/Guma2GpiWugcDM/lZwx7tQlmLD3sPbs2IuLb/eXAsSHeYXvJUTI/vCoui3DC+IUOMqoDcbNpKpBI17zA+NW8dCrVpCz5nKqTvlEgTpAn50n6IYbNgjdI7brcQ3TqQrQCNSBEisVT9QpOouyNgm3KSNeO7mZT24d2YZjI/A7sq9wI38XikAulXYEsynqwYBMtkAB9KtPHujLWcNcutdVurRmBCgNO+rzLSx3ide/WkXRzBGzi2S26uVtnUyN8p2E6699XO7w44i2bd5mKNuFzLsZ1M6+lZ6uOfTeAx0MgW5b7HTyhMpUA4EuF7pRwjCOLFr/AIZ2m2jZurBnMoaZjXesq4YXDsiKi3XCqoVdQdFED7vcKyuY57SSfx/K0Na4ABFFfGsrIrCaIq1x8K4Irs1zQSrUTpUTLRBBrhloUSA4gP3bhdSUYDxJBA1ry/G8JvIO2oXzYCvWnsg0t4pwNbzWyzkBDOXKCCRsZOorTQrBhul1Gkiy8cxwZomNAFAkGI8jRWWK9O4j0cw+VnZZKqTuRsJ5Hwrz61xLsBLqq6jb7rL5NXbwWIp1Z3R6Ln16bmG95QNdKKJVLTeyLvlCt8xFE28E/wBzD3mPijR6KPxNbnFjLucB5pIBdoENZwLXMokKGcJmbaSfwFdcU4J1Ch+sS6jEqHQwA6nURJH68K54lh7tshryMkiFzDSPAbDlReF6P4m/bRlUtbdjllpAMkFis9kSDJisFWsM4eHDLpeL98k1rLERdJ1cbV2BUvSDhZwrLbuhSxXMAhmBMayBBp5wboYmJQPbxKlSBIAJK+DAsINMOMpNYHk2PIn4CoUnkloFwq9cvQNNT3fWrh0Jv27q9SUh1ViWDTmAeJyEED2vlQfH+ia4VLZ60sWuKkZQoE7nc61aOCdF0wl43LdxmBTJDRMlgSZEaaDSPjXOx+MpVaVj011C0UKT2v8AnTel3HuEIA7LBIQAIECEkOGJzrAJgEAFfjXm9/RnBEGTI7tdq9U6V8StJbIfKXI7IP4nwrz2/laY9rLvoNxs2m4FXgHv2fi8lWKa3NZBragCDB3JJEHuER8551PbsXSCwtkqASWAMADckxoK9G6GBUwtvMi5peTAn+0aJO+gijOlHFF+yXlJgtbZRPORGlD/AHJ7amzDJvGvOEQwgLc07uC80wVh77C0i5mYN2Qd4EkTpyBPwp/g+h2MusWcZMyqSzsRm0y5SFkyANiBQPQG6BjM3NLbkeB7Kz6MR8a9MXi87kfDWhxuLe2plHDh3wUw9EObmKQYboVfiGxcDuClv9TflSw8BX7cMK9x2QWyxOgM5Z2AiNvWrwvFV79v1tVW4RjBe4veuKQVFrSII9myDr55qS3H4l7XZnmAPyAmuw9MEQN6s/DbVrDWksqSwQQC0SdZ1jzpH09xobCMo5vb+TZvyq0XrKsNvSqx0l6N3r6ZbTpGYNleQdARGYEzv3VkoPaagLjvlOqNIYQOEKi4+zdF9GNt8pFkAgZuyttFPszyFehHpJGxPzP5VvCcMYgZw4I0gqNI7ipgimmDwOXlA8t6ZXxAfAjS2qGnSyyZ1SzFcTvXbTrbUEsjL2iV9oETMH0/CpehWHNjDJYurDrnOkFTLk+0PAjQ03GFXmoqVLIG0Cs+0dlyxaZTCwTKjbhtotnFtQ/vKMrRvBZYJGm1T9SByqRKmFWAXalDMaIbXxrKKyit0WQ8VMyEmuCK3NcxREqlqtA13XJNCrXD1yFrpjWgKEo1mWuctdZaHu71Si5xxAR5j2W/A1X+hy2xhLRIXMQ0mBPttzimPEiMj+CN/pNJujDD7La8Af8AW1aGNmmeo+CluPjHQ/KsguryPyNQ3rncdaAuYkLv8zUJxinY+mtCaI4Is6q/9IeJlrSzsGJ8NYp10bxJXCWgp0yajzJP50p470eF92uhmBaJUCdQAJ+Vc8MwV+2mRO2o2GvP4TWxwpmg1jTp5ce+azDMKpcRqkvSsf8AF57pLqxVoBPsDQr4GFO3gauHRfh1vB5z1oZnIidIQaqDyzamSPClV3gl1zLWj5nl60zw3R99i2lSvWa6mGZotB8tOilOmQ8uha6VY5bv2dVM/v1MbbEd+/lVxt3gRNUnH9GXzJdQ5yjKcmxYBgfaOny1q3pYMaaVz64YGtyGde+9Vqp5szpHD4VP49c/4i5n0XIuWO4DUjvOYmqtiEEK0ab9rUzpInmROp869B6U8NLWCwUs6EZSgkqCQG05iJ08K8+tWw5yO40AAGbvImFgMG/ukSZ2rqYSqHUulu+qxV2EP6qw8CxJFsktBkFY29kbj5fCj8TYa8MrCQeRA/Gm/AuHiykAFQSWykzkkzAP5TTy2ndrXPqYrxktHn39rU2l4blUXC9EDbIe3Ibvk6d9NU4OR/zD5CrUU8KxUHIUp+Iqv/cjbSY3QJJhuGDnmPnU9ngdpX6xAUedWTTN4MNiPMU4iK1ApRdU4o8reC2hNdxWgfCug9AArK0ZFbW6a7VhUqrRtaToUBMahci54VuRW2t1wBTLjVCI3KZCK6iolNSimNKErrJW6zNWUdkN0Aa5JrdZQFGtTXBasrKEqLgNW5rKyhRLRLeFQNaPhWqyrVobE4AsrCd1I5cxFI+D9HntW1W4559kR2RJgT5VlZRbVzWlo7gKsgLp71TWzwm33T50QOHquwA8gK1WUJcTqUQaAtDDDuqZbUbaCsrKzi5uiXQs1tbdZWVYAVqbL31zkisrKLKIQysK1E2FXNmKrm96BPrW6ygIhEuglTIYrKyhChXYatkD41qspiFaBrbJWVlCLgyrXaJUyisrKawICu8vfWwRWVlMJgoRdaDVJWVlRQrZWugAaysowLoF1l8aysrKOEMr/9k=" alt="" width="100%" height="255"></img>
          <div class="card-body">
            <p class="card-text">Gran capacidad para gestionar eventos de conferencias con todo el equipamiento necesario.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              </div>
              <small class="text-muted">Grandes eventos de conferencia</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="https://tabeevents.com/wp-content/uploads/2018/06/foto-1.jpg"alt="" width="100%" height="255"></img>
          <div class="card-body">
            <p class="card-text">Eventos de conferencias con todos los cuidados de sanitización correspondientes.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              </div>
              <small class="text-muted">Sanitizado</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqXSVW1kqm3weB702qYhLgJ7QYfj7UKTYRA1mndYB61yZe3rlKYhoXD7MYRTwAR4OWGA&usqp=CAU"alt="" width="100%" height="255"></img>
          <div class="card-body">
            <p class="card-text">Espacios que se ajustan a sus necesidades empresariales, desde Cowork a salones de eventos.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              </div>
              <small class="text-muted">Empresas</small>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <img src="data:image/jpeg;base64,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" alt="" width="100%" height="255"></img>
          <div class="card-body">
            <p class="card-text">Contamos con servicio de Coffee Break para los eventos. Incluido en plan Empresarial y Corporativo </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              </div>
              <small class="text-muted">Cofee Break</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="https://www.radiotaxischile.cl/wp-content/uploads/2022/04/taxi-cab-taxicab-taxi-cab-wallpaper-scaled.jpg" alt="" width="100%" height="255"></img>
          <div class="card-body">
            <p class="card-text">Contamos con sistema de transporte de radio taxi premium para plan mensual Corpotativo </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              </div>
              <small class="text-muted">Transporte Premium</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="https://www.digitalavmagazine.com/wp-content/uploads/2017/11/Lawo-en-opera-de-Zurich-2.jpg" alt="" width="100%" height="255"></img>
          <div class="card-body">
            <p class="card-text">Se cuenta con la disposición de un asistente y los equipos necesarios para realizar un evento de conferencia</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              </div>
              <small class="text-muted">Asistencia</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</main>

<footer class="text-muted py-5">
<div class="container">
  <p class="float-end mb-1">
    <a href="#">Back to top</a>
  </p>
  <p class="mb-1">Imágenes representativas &copy; Todos los derechos reservados.</p>
  <p class="mb-0">2022 <a href="/conocenos">Conócenos</a> o ponte en contacto con nostros <a href="/contacto">- Contacto</a>.</p>
</div>
</footer>

         </div>
    )
}



