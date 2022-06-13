package com.FullStackProject.UrlShortner.service;

import com.FullStackProject.UrlShortner.model.Url;
import com.FullStackProject.UrlShortner.repository.UrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.FullStackProject.UrlShortner.logic.GenerateShortUrl.getShortUrl;
import static com.FullStackProject.UrlShortner.logic.GenerateShortUrl.isUrlValid;

@Service
public class UrlService {
    @Autowired
    private UrlRepository urlRepository;

    public String getOriginalUrl(String id){
        return urlRepository.findByShortUrl(id);
    }
    public Url generateShortUrl(String url){
        if (! isUrlValid(url)){
            System.out.println("Url is not valid");
            return null;
        }

        Url urlObject = new Url();
        urlObject.setOriginalurl(url);
        urlObject.setShorturl(getShortUrl(url));

        return urlRepository.save(urlObject);
    }
}
