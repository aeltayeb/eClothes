package com.amm.ecom.store.web.rest;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/LAFResource")
public class LookAndFeelResource {

	@Value("${app.carosuelImages}")
	private Integer noOfImages;
	
	
	@GetMapping("/getCarouselImages")
	List<String> getCarouselImages() {
		 return IntStream.range(1, noOfImages+1).mapToObj(i ->  "/aeltayeb"+ i).collect(Collectors.toList());
	}
}
