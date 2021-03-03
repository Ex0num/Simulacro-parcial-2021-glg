//Censo Municipal
//Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

//necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
//el tipo de pelaje (corto, largo , sin pelo),
//la edad de la mascota (edad validada);
//el nombre (una palabra)
//la raza (una palabra)
//el peso (peso validado)
//el estadoClinico (enfermo,internado o adopcion)
//la temperaruta corporal
//y nos piden informar solo si existe
//a)El perro mas pesado
//b)El porcentaje de enfermos sobre el total de mascotas
//c)El nombre de la ultima mascota de tipo "otra cosa"
//d)El animal sin pelo con menor temperatura corporal
//e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
//f)Sumando gatos y perros que porcentaje del total de mascotas son?
//g)Que estado clinico tiene la menor cantidad de mascotas
//H)Cual es el promedio de kilos de peso de tomando todas las mascotas
//i)El nombre y raza del gato sin pelos mas liviano


function probarEjercicio()
{
	var respuesta;
	var tipoMascotaIngresada;
	var tipoPelajeIngresado;
	var edadIngresada;
	var nombreIngresado;
	var razaIngresada;
	var pesoIngresado;
	var pesoIngresadoParseado;
	var estadoClinicoIngresado;
	var temperaturaCorporalIngresada;
	var temperaturaCorporalIngresadaParseada;
	var contadorPerros;
	var perroMasPesado;
	var contadorMascotasEnfermas;
	var contadorMascotas;
	var porcentajeTotalMascotasEnfermas;
	var nombreDeUltimaMascotaOtro;
	var menorTemperaturaCorporalSinPelo;
	var contadorMascotasSinPelo;
	var promedioTemperaturaPerros;
	var acumuladorTemperaturaPerros;
	var promedioTemperaturaGatos;
	var acumuladorTemperaturaGatos;
	var contadorGatos;
	var promedioTemperaturaOtros;
	var acumuladorTemperaturaOtros;
	var contadorOtros;
	var promedioMayorTemperaturaTodosTiposMascotas;
	var porcentajeTotalSumaPerrosyGatos;
	var porcentajePerros;
	var porcentajeGatos;
	var porcentajeOtros;
	var estadoClinicoMenor;
	var contadorMascotasAdopcion;
	var contadorMascotasInternado;
	var promediodeKilosTodasMascotas;
	var acumuladorKilos;
	var nombreGatoMasLivianoSinPelos;
	var razaGatoMasLivianoSinPelos;
	var kilosGatoMasLivianoSinPelos;
	
	acumuladorKilos = 0;
	contadorMascotasEnfermas = 0;
	contadorMascotasInternado = 0;
	contadorMascotasAdopcion = 0;
	contadorMascotas = 0;
	contadorMascotasSinPelo = 0;
	acumuladorTemperaturaPerros = 0;
	acumuladorTemperaturaGatos = 0;
	acumuladorTemperaturaOtros = 0;
	contadorPerros = 0;
	contadorGatos = 0;
	contadorOtros = 0;
	respuesta = true;

	while (respuesta == true)
		{
			tipoMascotaIngresada = prompt ("Ingrese el tipo de mascota. (gato - perro - otro).");
			while (tipoMascotaIngresada != "gato" && tipoMascotaIngresada != "perro" && tipoMascotaIngresada != "otro")
				{
					alert ("El tipo de mascota que ingresó es inválido. Solo puede ser: (gato - perro - otro).");
					tipoMascotaIngresada = prompt ("Reingrese el tipo de mascota. (gato - perro - otro).");
				}

			tipoPelajeIngresado = prompt ("Ingrese el tipo de pelaje. (corto - largo - sin pelo");
			while (tipoPelajeIngresado != "corto" && tipoPelajeIngresado != "largo" && tipoPelajeIngresado != "sin pelo")
				{
					alert ("El tipo de pelaje que ingresó es inválido. Solo puede ser: (corto - largo - sin pelo).");
					tipoPelajeIngresado = prompt ("Reingrese el tipo de pelaje. (corto - largo - sin pelo");
				}	

			edadIngresada = prompt ("Ingrese la edad de su mascota.");
			while (isNaN (edadIngresada) == true)
				{
					alert ("La edad que ingresó es inválida. Por favor reintentelo.");
					edadIngresada = prompt ("Reingrese la edad de su mascota. (Solo debe contener números).");
				}

			nombreIngresado = prompt ("Ingrese el nombre de la mascota. (Debe ser una palabra, no números).");
			while (isNaN (nombreIngresado) == false )
				{
					alert ("El nombre que ingresó contiene números. Por favor reintente con una palabra.");
					nombreIngresado = prompt ("Reingrese el nombre de la mascota. (Debe ser una palabra, no números).");
				}

			razaIngresada = prompt ("Ingrese la raza de la mascota. (Debe ser una palabra, no números).");
			while (isNaN (razaIngresada) == false )
				{
					alert ("La raza que ingresó contiene números. Por favor reintente con una palabra.");
					razaIngresada = prompt ("Reingrese la raza de la mascota. (Debe ser una palabra, no números).");	
				}

			pesoIngresado = prompt ("Ingrese el peso de la mascota (en kg). (Debe ser un número y no debe contener texto).");
			pesoIngresadoParseado = parseInt(pesoIngresado);
			while (isNaN (pesoIngresadoParseado) == true || pesoIngresadoParseado > 60 || pesoIngresadoParseado < 1)
				{
					alert ("El número que ingresó es inválido. Por favor reingrese el peso sólo con números válidos y sin texto.");
					pesoIngresado = prompt ("Reingrese el peso de la mascota. (Debe ser un número y no debe contener texto).");
					pesoIngresadoParseado = parseInt(pesoIngresado);
				}

			estadoClinicoIngresado = prompt ("Ingrese el estado clínico de su mascota (enfermo - internado - adopcion).");
			while (estadoClinicoIngresado != "enfermo" && estadoClinicoIngresado != "internado" && estadoClinicoIngresado != "adopcion")
				{
					alert ("El estado clínico que ingresó es inválido. Debe ser un texto y ser (enfermo - internado - adopcion).");
					estadoClinicoIngresado = prompt ("Reingrese el estado clínico de su mascota (enfermo - internado - adopcion).");
				}

			temperaturaCorporalIngresada = prompt ("Ingrese la temperatura corporal de su mascota. (En grados Celsius).");
			temperaturaCorporalIngresadaParseada = parseInt (temperaturaCorporalIngresada);
			while (isNaN (temperaturaCorporalIngresadaParseada) == true || temperaturaCorporalIngresadaParseada > 50 || temperaturaCorporalIngresadaParseada < 25)
				{
					alert ("La temperatura corporal de su mascota es inválida. Reingresela, en grados Celsius y sin texto.");
					temperaturaCorporalIngresada = prompt ("Reingrese la temperatura corporal de su mascota. (En grados Celsius).");
				}	

				contadorMascotas++;
				acumuladorKilos = acumuladorKilos + pesoIngresadoParseado;

			switch (tipoMascotaIngresada)
				{
					case "perro":
						{
							contadorPerros++;
							acumuladorTemperaturaPerros = temperaturaCorporalIngresadaParseada + acumuladorTemperaturaPerros;
						
							if (contadorPerros == 1)
								{
									perroMasPesado = pesoIngresadoParseado;
								}

							else if (pesoIngresadoParseado > perroMasPesado)
								{
									perroMasPesado = pesoIngresadoParseado;
								}
							break;
						}

					case "gato":	
						{
							contadorGatos++;
							acumuladorTemperaturaGatos = temperaturaCorporalIngresadaParseada + acumuladorTemperaturaGatos;
							break;
						}

					case "otro":
						{
							contadorOtros++;
							acumuladorTemperaturaOtros = temperaturaCorporalIngresadaParseada + acumuladorTemperaturaOtros;
							nombreDeUltimaMascotaOtro = nombreIngresado;
							break;
						}
				}

			switch (estadoClinicoIngresado)
				{
					case "enfermo":
						{
							contadorMascotasEnfermas++;
							break;
						}
					
					case "adopcion":
						{
							contadorMascotasAdopcion++;
							break;
						}
					
					case "internado":
						{
							contadorMascotasInternado++;
							break;	
						}
				}

			porcentajeTotalMascotasEnfermas = contadorMascotasEnfermas * 100 / contadorMascotas;

			if (tipoPelajeIngresado == "sin pelo")
				{
					contadorMascotasSinPelo++;

					if (contadorMascotasSinPelo == 1)
						{
							menorTemperaturaCorporalSinPelo = temperaturaCorporalIngresadaParseada;
						}

					else if (temperaturaCorporalIngresadaParseada < menorTemperaturaCorporalSinPelo)
						{
							menorTemperaturaCorporalSinPelo = temperaturaCorporalIngresadaParseada;
						}

					if ( contadorMascotasSinPelo == 1 && tipoMascotaIngresada == "gato")
						{
							nombreGatoMasLivianoSinPelos = nombreIngresado;
							razaGatoMasLivianoSinPelos = razaIngresada;
							kilosGatoMasLivianoSinPelos = pesoIngresadoParseado;
						}

					else if ( tipoMascotaIngresada == "gato" && pesoIngresadoParseado < kilosGatoMasLivianoSinPelos)
						{
							nombreGatoMasLivianoSinPelos = nombreIngresado;
							razaGatoMasLivianoSinPelos = razaIngresada;
							kilosGatoMasLivianoSinPelos = pesoIngresadoParseado;
						}	
				}

			promedioTemperaturaPerros = acumuladorTemperaturaPerros / contadorPerros;
			promedioTemperaturaOtros = acumuladorTemperaturaOtros / contadorOtros;
			promedioTemperaturaGatos = acumuladorTemperaturaGatos / contadorGatos;

			if (promedioTemperaturaPerros > promedioTemperaturaGatos && promedioTemperaturaPerros > promedioTemperaturaOtros)
				{
					promedioMayorTemperaturaTodosTiposMascotas = "Perros.";
				}

			else if (promedioTemperaturaGatos > promedioTemperaturaPerros && promedioTemperaturaGatos > promedioTemperaturaOtros)
				{
					promedioMayorTemperaturaTodosTiposMascotas = "Gatos.";
				}	
			
			else if (promedioTemperaturaOtros > promedioTemperaturaPerros && promedioTemperaturaOtros > promedioTemperaturaGatos)
				{
					promedioMayorTemperaturaTodosTiposMascotas = "Otros.";
				}	

			porcentajeGatos = (contadorGatos * 100) / contadorMascotas;
			porcentajePerros = (contadorPerros * 100) / contadorMascotas;
			porcentajeOtros = (contadorOtros * 100) / contadorMascotas;
			porcentajeTotalSumaPerrosyGatos = porcentajeGatos + porcentajePerros;
	
			if (contadorMascotasAdopcion < contadorMascotasEnfermas && contadorMascotasAdopcion < contadorMascotasInternado)
				{
					estadoClinicoMenor = "En adopción.";
				}

			else if (contadorMascotasEnfermas < contadorMascotasAdopcion && contadorMascotasEnfermas < contadorMascotasInternado)
				{
					estadoClinicoMenor = "Enfermas.";
				}
			
			else if (contadorMascotasInternado < contadorMascotasAdopcion && contadorMascotasInternado < contadorMascotasEnfermas)
				{
					estadoClinicoMenor = "Internados.";
				}

			promediodeKilosTodasMascotas = 	acumuladorKilos / contadorMascotas;

			respuesta = confirm ("¿Desea continuar el ingreso de mascotas?");
		}

		document.write ("El perro más pesado es: "+perroMasPesado+"kg . El porcentaje de enfermos sobre el total de mascotas es de: "+porcentajeTotalMascotasEnfermas+"%. El nombre de la ultima mascota ingresada de tipo otros es: "+nombreDeUltimaMascotaOtro+". El animal sin pelo con menor temperatura corporal es de: "+menorTemperaturaCorporalSinPelo+" grados Celsius. La mascota (entre gatos - perros - otros) que tiene el mayor promedio de temperatura corporal son: "+promedioMayorTemperaturaTodosTiposMascotas+" El porcentaje total de la suma entre gatos y perros es de: "+porcentajeTotalSumaPerrosyGatos+"%. El estado clínico tiene la menor cantidad de mascotas es: "+estadoClinicoMenor+" El promedio de kilos de peso de tomando todas las mascotas de: "+promediodeKilosTodasMascotas+". El nombre y raza del gato sin pelos mas liviano es: "+nombreGatoMasLivianoSinPelos+" y su raza es: "+razaGatoMasLivianoSinPelos);
}